module.exports.do = function(req, res){
    res.status(200).send({
        'package': 'IBMWatsonDocumentConversion',
        "tagline": "IBMWatsonDocumentConversion API Package",
        "keywords": ["API"],
        "description": "The IBM Watson™ Document conversion service converts a single HTML, PDF, or Microsoft Word™ document into a normalized HTML, plain text, or a set of JSON-formatted Answer units that can be used with other Watson services.",
        'image': 'https://avatars0.githubusercontent.com/u/9221727?v=3&s=200',
        'repo': 'https://github.com/RapidSoftwareSolutions/Marketplace-IBMWatsonDocumentConversion-Package',
        'accounts': {
            "domain": "https://www.ibm.com/watson",
            "credentials": ["username", "password"]
        },
        'blocks': [{
            "name":"convertHtmlToJsonUnits",
            "description": "Converts a `html` document to JSON answer units.",
            "args":[
                {
                    name: "username",
                    type: "credentials",
                    info: "Username obtained from IBM Bluemix.",
                    required: true
                },
                {
                    name: "password",
                    type: "credentials",
                    info: "Password obtained from IBM Bluemix.",
                    required: true
                },
                {
                    name: "file",
                    type: "File",
                    info: "The `html` file to convert. Maximum file size is 50 MB.",
                    required: true
                },
                {
                    name: "selectorTags",
                    type: "List",
                    structure : {
                      name: "selectorTag",
                      type: "String",
                      info: "Single selectorTag"
                    },
                    info: "JSON Array. Defines the heading level that splits into answer units. Valid values are h1, h2, h3, h4, h5, h6, or an array of these values. By default, h1 and h2 headings with their content are split into answer units.",
                    required: false
                },
                {
                    name: "normalizedHtml",
                    type: "JSON",
                    info: "An object that defines the content that is included and excluded during the HTML normalization phase. All documents go through this phase. For more information about the normalized_html configurations, see README for more info.",
                    required: false
                }
            ],
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"convertHtmlToPlainText",
            "description": "Converts a `html` document to plain text.",
            "args":[
                {
                    name: "username",
                    type: "credentials",
                    info: "Username obtained from IBM Bluemix.",
                    required: true
                },
                {
                    name: "password",
                    type: "credentials",
                    info: "Password obtained from IBM Bluemix.",
                    required: true
                },
                {
                    name: "file",
                    type: "File",
                    info: "The `html` file to convert. Maximum file size is 50 MB.",
                    required: true
                },
                {
                    name: "normalizedHtml",
                    type: "JSON",
                    info: "An object that defines the content that is included and excluded during the HTML normalization phase. All documents go through this phase. For more information about the normalized_html configurations, see README for more info.",
                    required: false
                }
            ],
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"convertHtmlToNormalizedHTML",
            "description": "Converts a `html` document to normalized HTML.",
            "args":[
                {
                    name: "username",
                    type: "credentials",
                    info: "Username obtained from IBM Bluemix.",
                    required: true
                },
                {
                    name: "password",
                    type: "credentials",
                    info: "Password obtained from IBM Bluemix.",
                    required: true
                },
                {
                    name: "file",
                    type: "File",
                    info: "The `html` file to convert. Maximum file size is 50 MB.",
                    required: true
                },
                {
                    name: "normalizedHtml",
                    type: "JSON",
                    info: "An object that defines the content that is included and excluded during the HTML normalization phase. All documents go through this phase. For more information about the normalized_html configurations, see README for more info.",
                    required: false
                }
            ],
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"convertPDFToJsonUnits",
            "description": "Converts a `pdf` document to json answer units.",
            "args":[
                {
                    name: "username",
                    type: "credentials",
                    info: "Username obtained from IBM Bluemix.",
                    required: true
                },
                {
                    name: "password",
                    type: "credentials",
                    info: "Password obtained from IBM Bluemix.",
                    required: true
                },
                {
                    name: "file",
                    type: "File",
                    info: "The `pdf` file to convert. Maximum file size is 50 MB.",
                    required: true
                },
                {
                    name: "selectorTags",
                    type: "List",
                    structure : {
                      name: "selectorTag",
                      type: "String",
                      info: "Single selectorTag"
                    },
                    info: "JSON Array. Defines the heading level that splits into answer units. Valid values are h1, h2, h3, h4, h5, h6, or an array of these values. By default, h1 and h2 headings with their content are split into answer units.",
                    required: false
                },
                {
                    name: "normalizedHtml",
                    type: "JSON",
                    info: "An object that defines the content that is included and excluded during the HTML normalization phase. All documents go through this phase. For more information about the normalized_html configurations, see README for more info.",
                    required: false
                },
                {
                    name: "headingFonts",
                    type: "List",
                    structure : {
                      name: "headingFont",
                      type: "JSON",
                      info: "Single headingFont"
                    },
                    info: "JSON Array. PDF heading font configurations. See README for more info.",
                    required: false
                }
            ],
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"convertPDFToPlainText",
            "description": "Converts a `pdf` document to plain text.",
            "args":[
                {
                    name: "username",
                    type: "credentials",
                    info: "Username obtained from IBM Bluemix.",
                    required: true
                },
                {
                    name: "password",
                    type: "credentials",
                    info: "Password obtained from IBM Bluemix.",
                    required: true
                },
                {
                    name: "file",
                    type: "File",
                    info: "The `pdf` file to convert. Maximum file size is 50 MB.",
                    required: true
                },
                {
                    name: "normalizedHtml",
                    type: "JSON",
                    info: "An object that defines the content that is included and excluded during the HTML normalization phase. All documents go through this phase. For more information about the normalized_html configurations, see README for more info.",
                    required: false
                },
                {
                    name: "headingFonts",
                    type: "List",
                    structure : {
                      name: "headingFont",
                      type: "JSON",
                      info: "Single headingFont"
                    },
                    info: "JSON Array. PDF heading font configurations. See README for more info.",
                    required: false
                }
            ],
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"convertPDFToNormalizedHTML",
            "description": "Converts a `pdf` document to normalized HTML.",
            "args":[
                {
                    name: "username",
                    type: "credentials",
                    info: "Username obtained from IBM Bluemix.",
                    required: true
                },
                {
                    name: "password",
                    type: "credentials",
                    info: "Password obtained from IBM Bluemix.",
                    required: true
                },
                {
                    name: "file",
                    type: "File",
                    info: "The `pdf` file to convert. Maximum file size is 50 MB.",
                    required: true
                },
                {
                    name: "normalizedHtml",
                    type: "JSON",
                    info: "An object that defines the content that is included and excluded during the HTML normalization phase. All documents go through this phase. For more information about the normalized_html configurations, see README for more info.",
                    required: false
                },
                {
                    name: "headingFonts",
                    type: "List",
                    structure : {
                      name: "headingFont",
                      type: "JSON",
                      info: "Single headingFont"
                    },
                    info: "JSON Array. PDF heading font configurations. See README for more info.",
                    required: false
                }
            ],
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"convertMicrosoftWordToJsonUnits",
            "description": "Converts a `Microsoft Word™` document to json answer units.",
            "args":[
                {
                    name: "username",
                    type: "credentials",
                    info: "Username obtained from IBM Bluemix.",
                    required: true
                },
                {
                    name: "password",
                    type: "credentials",
                    info: "Password obtained from IBM Bluemix.",
                    required: true
                },
                {
                    name: "file",
                    type: "File",
                    info: "The `msword` file to convert. Maximum file size is 50 MB.",
                    required: true
                },
                {
                    name: "selectorTags",
                    type: "List",
                    structure : {
                      name: "selectorTag",
                      type: "String",
                      info: "Single selectorTag"
                    },
                    info: "JSON Array. Defines the heading level that splits into answer units. Valid values are h1, h2, h3, h4, h5, h6, or an array of these values. By default, h1 and h2 headings with their content are split into answer units.",
                    required: false
                },
                {
                    name: "normalizedHtml",
                    type: "JSON",
                    info: "An object that defines the content that is included and excluded during the HTML normalization phase. All documents go through this phase. For more information about the normalized_html configurations, see README for more info.",
                    required: false
                },
                {
                    name: "headingFonts",
                    type: "List",
                    structure : {
                      name: "headingFont",
                      type: "JSON",
                      info: "Single headingFont"
                    },
                    info: "JSON Array. Word heading font configurations. See README for more info.",
                    required: false
                },
                {
                    name: "headingStyles",
                    type: "List",
                    structure : {
                      name: "headingStyle",
                      type: "JSON",
                      info: "Single headingStyle"
                    },
                    info: "JSON Array. Word heading styles configurations. See README for more info.",
                    required: false
                }
            ],
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"convertMicrosoftWordToPlainText",
            "description": "Converts a `Microsoft Word™` document to plain text.",
            "args":[
                {
                    name: "username",
                    type: "credentials",
                    info: "Username obtained from IBM Bluemix.",
                    required: true
                },
                {
                    name: "password",
                    type: "credentials",
                    info: "Password obtained from IBM Bluemix.",
                    required: true
                },
                {
                    name: "file",
                    type: "File",
                    info: "The `msword` file to convert. Maximum file size is 50 MB.",
                    required: true
                },
                {
                    name: "normalizedHtml",
                    type: "JSON",
                    info: "An object that defines the content that is included and excluded during the HTML normalization phase. All documents go through this phase. For more information about the normalized_html configurations, see README for more info.",
                    required: false
                },
                {
                    name: "headingFonts",
                    type: "List",
                    structure : {
                      name: "headingFont",
                      type: "JSON",
                      info: "Single headingFont"
                    },
                    info: "JSON Array. Word heading font configurations. See README for more info.",
                    required: false
                },
                {
                    name: "headingStyles",
                    type: "List",
                    structure : {
                      name: "headingStyle",
                      type: "JSON",
                      info: "Single headingStyle"
                    },
                    info: "JSON Array. Word heading styles configurations. See README for more info.",
                    required: false
                }
            ],
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"convertMicrosoftWordToNormalizedHTML",
            "description": "Converts a `Microsoft Word™` document to normalized HTML.",
            "args":[
                {
                    name: "username",
                    type: "credentials",
                    info: "Username obtained from IBM Bluemix.",
                    required: true
                },
                {
                    name: "password",
                    type: "credentials",
                    info: "Password obtained from IBM Bluemix.",
                    required: true
                },
                {
                    name: "file",
                    type: "File",
                    info: "The `msword` file to convert. Maximum file size is 50 MB.",
                    required: true
                },
                {
                    name: "normalizedHtml",
                    type: "JSON",
                    info: "An object that defines the content that is included and excluded during the HTML normalization phase. All documents go through this phase. For more information about the normalized_html configurations, see README for more info.",
                    required: false
                },
                {
                    name: "headingFonts",
                    type: "List",
                    structure : {
                      name: "headingFont",
                      type: "JSON",
                      info: "Single headingFont"
                    },
                    info: "JSON Array. Word heading font configurations. See README for more info.",
                    required: false
                },
                {
                    name: "headingStyles",
                    type: "List",
                    structure : {
                      name: "headingStyle",
                      type: "JSON",
                      info: "Single headingStyle"
                    },
                    info: "JSON Array. Word heading styles configurations. See README for more info.",
                    required: false
                }
            ],
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"indexDocument",
            "description": "Prepares a document for the Retrieve and Rank service as part of an Enhanced Information Retrieval solution, then adds the content to your Solr index so you can search it.",
            "args":[
                {
                    name: "username",
                    type: "credentials",
                    info: "Username obtained from IBM Bluemix.",
                    required: true
                },
                {
                    name: "password",
                    type: "credentials",
                    info: "Password obtained from IBM Bluemix.",
                    required: true
                },
                {
                    name: "file",
                    type: "File",
                    info: "The file to index. Required if the metadata object is not included. Maximum file size is 50 MB. The API detects the MIME type, but you can specify it if incorrect. Acceptable MIME type values are text/html, text/xhtml+xml, application/pdf, application/msword, and application/vnd.openxmlformats-officedocument.wordprocessingml.document.",
                    required: true
                },
                {
                    name: "metadata",
                    type: "JSON",
                    info: "A metadata part that describes the external metadata of the file. Required if the file is not included. You might call this method without a file part when there is no document content to index (for example, with a database connector). Maximum size of the part is 1 MB.",
                    required: false
                },
                {
                    name: "normalizedHtml",
                    type: "JSON",
                    info: "An object that defines the content that is included and excluded during the HTML normalization phase. All documents go through this phase. For more information about the normalized_html configurations, see README for more info.",
                    required: false
                },
                {
                    name: "retrieveAndRankDryRun",
                    type: "Boolean",
                    info: "The dryRun property defaults to false. Set it to true to test how your document is indexed. When set to true, service_instance_id, cluster_id, and search_collection are optional.",
                    required: false
                },
                {
                    name: "retrieveAndRankServiceInstanceId",
                    type: "String",
                    info: "The identifier or your Retrieve and Rank service. Required if dry_run is not set to false. To find your service_instance_id, click the tile for your service in Bluemix, and then look at the URL in the browser for the serviceGuid= request parameter. The value for service_instance_id is the value for serviceGuid.",
                    required: false
                },
                {
                    name: "retrieveAndRankClusterId",
                    type: "String",
                    info: "Matches the value of solr_cluster_id in your Retrieve and Rank service. Required if dry_run is not set to false.",
                    required: false
                },
                {
                    name: "retrieveAndRankSearchCollection",
                    type: "String",
                    info: "Matches the value of collection_name in your Retrieve and Rank service. Required if dry_run is not set to false.",
                    required: false
                },
                {
                    name: "retrieveAndRankFieldsMappings",
                    type: "List",
                    structure : {
                      name: "retrieveAndRankFieldMapping",
                      type: "JSON",
                      info: "Single retrieveAndRankFieldMapping"
                    },
                    info: 'An array of objects to specify how to connect metadata fields in the file to fields in SOLR. Use the syntax mappings"{"from":"field_in_doc","to":"field_in_SOLR"}].',
                    required: false
                },
                {
                    name: "retrieveAndRankFieldsInclude",
                    type: "List",
                    structure : {
                      name: "retrieveAndRankFieldsInclude",
                      type: "JSON",
                      info: "Single retrieveAndRankFieldsInclude"
                    },
                    info: 'An array of fields in the file to include from Retrieve and Rank. To specify the allowed fields, provide only the include object. When you provide an include object, fields that are not included are excluded. Use the syntax "include":["field3_in_SOLR"].',
                    required: false
                },
                {
                    name: "retrieveAndRankFieldsExclude",
                    type: "List",
                    structure : {
                      name: "retrieveAndRankFieldsExclude",
                      type: "JSON",
                      info: "Single retrieveAndRankFieldsExclude"
                    },
                    info: 'An array of fields to exclude from Retrieve and Rank. To exclude a few fields and allow all others, provide only the exclude object. Fields that are not excluded are allowed. Follows the syntax "exclude":["field1_in_SOLR","field2_in_SOLR"].',
                    required: false
                }
            ],
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"indexExternalMetadata",
            "description": "Prepares a metadata object for the Retrieve and Rank service as part of an Enhanced Information Retrieval solution, then adds the content to your Solr index so you can search it.",
            "args":[
                {
                    name: "username",
                    type: "credentials",
                    info: "Username obtained from IBM Bluemix.",
                    required: true
                },
                {
                    name: "password",
                    type: "credentials",
                    info: "Password obtained from IBM Bluemix.",
                    required: true
                },
                {
                    name: "metadata",
                    type: "List",
                    structure : {
                      name: "metadata",
                      type: "JSON",
                      info: "Single metadata"
                    },
                    info: 'An array of metadata JSON objects',
                    required: true
                },

                {
                    name: "normalizedHtml",
                    type: "JSON",
                    info: "An object that defines the content that is included and excluded during the HTML normalization phase. All documents go through this phase. For more information about the normalized_html configurations, see README for more info.",
                    required: false
                },
                {
                    name: "retrieveAndRankDryRun",
                    type: "Boolean",
                    info: "The dryRun property defaults to false. Set it to true to test how your document is indexed. When set to true, service_instance_id, cluster_id, and search_collection are optional.",
                    required: false
                },
                {
                    name: "retrieveAndRankServiceInstanceId",
                    type: "String",
                    info: "The identifier or your Retrieve and Rank service. Required if dry_run is not set to false. To find your service_instance_id, click the tile for your service in Bluemix, and then look at the URL in the browser for the serviceGuid= request parameter. The value for service_instance_id is the value for serviceGuid.",
                    required: false
                },
                {
                    name: "retrieveAndRankClusterId",
                    type: "String",
                    info: "Matches the value of solr_cluster_id in your Retrieve and Rank service. Required if dry_run is not set to false.",
                    required: false
                },
                {
                    name: "retrieveAndRankSearchCollection",
                    type: "String",
                    info: "Matches the value of collection_name in your Retrieve and Rank service. Required if dry_run is not set to false.",
                    required: false
                },
                {
                    name: "retrieveAndRankFieldsMappings",
                    type: "List",
                    structure : {
                      name: "retrieveAndRankFieldMapping",
                      type: "JSON",
                      info: "Single retrieveAndRankFieldMapping"
                    },
                    info: 'An array of objects to specify how to connect metadata fields in the file to fields in SOLR. Use the syntax mappings"{"from":"field_in_doc","to":"field_in_SOLR"}].',
                    required: false
                },
                {
                    name: "retrieveAndRankFieldsInclude",
                    type: "List",
                    structure : {
                      name: "retrieveAndRankFieldsInclude",
                      type: "JSON",
                      info: "Single retrieveAndRankFieldsInclude"
                    },
                    info: 'An array of fields in the file to include from Retrieve and Rank. To specify the allowed fields, provide only the include object. When you provide an include object, fields that are not included are excluded. Use the syntax "include":["field3_in_SOLR"].',
                    required: false
                },
                {
                    name: "retrieveAndRankFieldsExclude",
                    type: "List",
                    structure : {
                      name: "retrieveAndRankFieldsExclude",
                      type: "JSON",
                      info: "Single retrieveAndRankFieldsExclude"
                    },
                    info: 'An array of fields to exclude from Retrieve and Rank. To exclude a few fields and allow all others, provide only the exclude object. Fields that are not excluded are allowed. Follows the syntax "exclude":["field1_in_SOLR","field2_in_SOLR"].',
                    required: false
                }
            ],
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }]
    })
};
