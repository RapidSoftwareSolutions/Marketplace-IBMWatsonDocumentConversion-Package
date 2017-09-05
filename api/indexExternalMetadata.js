const Q       = require('q');
const lib     = require('../lib/functions.js');
const request = require('request');

const fs      = require('fs');
const path    = require('path');
const spawn   = require('child_process').spawnSync

module.exports = (req, res) => {
    const defered = Q.defer();

    req.body.args = lib.clearArgs(req.body.args);

    let { 
        username,
        password,
        version='2015-12-15',
        retrieveAndRankDryRun,
        retrieveAndRankServiceInstanceId,
        retrieveAndRankClusterId,
        retrieveAndRankSearchCollection,
        metadata
    } = req.body.args;

    let { 
        normalizedHtml,
        retrieveAndRankFieldsMappings,
        retrieveAndRankFieldsInclude,
        retrieveAndRankFieldsExclude
    } = lib.json({
        normalizedHtml: req.body.args['normalizedHtml'],
        retrieveAndRankFieldsMappings: req.body.args['retrieveAndRankFieldsMappings'],
        retrieveAndRankFieldsInclude: req.body.args['retrieveAndRankFieldsInclude'],
        retrieveAndRankFieldsExclude: req.body.args['retrieveAndRankFieldsExclude']
    });
        
    let required = lib.parseReq({username, password, metadata});

    if(required.length > 0) 
        throw new RapidError('REQUIRED_FIELDS', required);

    let requestData = lib.clearArgs({
        config: {
            convert_document: {
                normalized_html: normalizedHtml
            },
            retrieve_and_rank: {
                dry_run: retrieveAndRankDryRun,
                service_instance_id: retrieveAndRankServiceInstanceId,
                cluster_id: retrieveAndRankClusterId,
                search_collection: retrieveAndRankSearchCollection,
                fields: {
                    mappings: retrieveAndRankFieldsMappings,
                    include: retrieveAndRankFieldsInclude,
                    exclude: retrieveAndRankFieldsExclude
                }
            }
        }
    }, true);

    if(/(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/.test(metadata)) {
        let attach = spawn(process.execPath, [require.resolve('../lib/download.js'), metadata]);

        if(!attach.stderr.toString()) {
            let response = JSON.parse(attach.stdout.toString());
            var fn       = path.resolve('./lib', response.message);

            if(!response.success)
                throw new RapidError('FILE_UPLOAD');

            metadata = fs.readFileSync(fn).toString('utf8');
        } else {
            throw new RapidError('INTERNAL_PACKAGE_ERROR');
        }
    }

    try {
        attachFile = (typeof metadata == 'string') ? JSON.parse(metadata) : metadata;
    } catch(e) {
        throw new RapidError('JSON_VALIDATION');
    }

    let r = request.post({
        qs: {version},
        uri: 'https://gateway.watsonplatform.net/document-conversion/api/v1/index_document',
        auth: { username, password },
        formData: {
            config: JSON.stringify(requestData.config),
            metadata: JSON.stringify({metadata: attachFile})
        }
    }, (err, response, reslut) => {
        if(!err && (/20.*/).test(response.statusCode))  
            defered.resolve(lib.safeParse(reslut));
        else 
            defered.reject(lib.safeParse(err || reslut || response.statusCode));

        if(fn) fs.unlink(fn, () => {});
    });

    return defered.promise;
}