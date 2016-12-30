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
        file
    } = req.body.args;

    let { 
        headingStyles,
        headingFonts,
        normalizedHtml
    } = lib.json({
        headingStyles:  req.body.args['headingStyles'],
        normalizedHtml: req.body.args['normalizedHtml'],
        headingFonts:   req.body.args['headingFonts'],
    });
        
    let required = lib.parseReq({username, password, file});

    if(required.length > 0) 
        throw new RapidError('REQUIRED_FIELDS', required);

    let requestData = lib.clearArgs({
        config: {
            conversion_target: 'normalized_html', 
            normalized_html: normalizedHtml,
            word: {
                heading: {
                    fonts: headingFonts,
                    styles: headingStyles
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
        uri: 'https://gateway.watsonplatform.net/document-conversion/api/v1/convert_document',
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

    return defered.promise;
}