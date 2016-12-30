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
        file,
        retrieveAndRankDryRun,
        retrieveAndRankServiceInstanceId,
        retrieveAndRankClusterId,
        retrieveAndRankSearchCollection
    } = req.body.args;

    let { 
        metadata,
        normalizedHtml,
        retrieveAndRankFieldsMappings,
        retrieveAndRankFieldsInclude,
        retrieveAndRankFieldsExclude
    } = lib.json({
        metadata: req.body.args['metadata'],
        normalizedHtml: req.body.args['normalizedHtml'],
        retrieveAndRankFieldsMappings: req.body.args['retrieveAndRankFieldsMappings'],
        retrieveAndRankFieldsInclude: req.body.args['retrieveAndRankFieldsInclude'],
        retrieveAndRankFieldsExclude: req.body.args['retrieveAndRankFieldsExclude']
    });
        
    let required = lib.parseReq({username, password, file});

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

    let attach = spawn(process.execPath, [require.resolve('../lib/download.js'), file]);

    if(!attach.stderr.toString()) {
        let response = JSON.parse(attach.stdout.toString());
        var fn       = path.resolve('./lib', response.message);

        if(!response.success)
            throw new RapidError('FILE_UPLOAD');

        var attachFile = fs.createReadStream(fn);
    } else {
        throw new RapidError('INTERNAL_PACKAGE_ERROR');
    }

    let r = request.post({
        qs: {version},
        uri: 'https://gateway.watsonplatform.net/document-conversion/api/v1/index_document',
        auth: { username, password }
    }, (err, response, reslut) => {
        if(!err && (/20.*/).test(response.statusCode))  
            defered.resolve(lib.safeParse(reslut));
        else 
            defered.reject(lib.safeParse(err || reslut || response.statusCode));

        fs.unlink(fn, () => {});
    })
    .form();
    
    r.append('config', JSON.stringify(requestData.config));
    r.append('file', attachFile);

    if(metadata) r.append('metadata', JSON.stringify(metadata));

    return defered.promise;
}