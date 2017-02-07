[![](https://scdn.rapidapi.com/RapidAPI_banner.png)](https://rapidapi.com/package/IBMWatsonDocumentConversion/functions?utm_source=RapidAPIGitHub_IBMDocConverterFunctions&utm_medium=button&utm_content=RapidAPI_GitHub)

# IBMWatsonDocumentConversion Package
The IBM Watson™ Document conversion service converts a single HTML, PDF, or Microsoft Word™ document into a normalized HTML, plain text, or a set of JSON-formatted Answer units that can be used with other Watson services.
* Domain: https://www.ibm.com/watson?ref=rapidapi
* Credentials: username, password

## How to get credentials: 
0. Register to [IBM Bluemix Console](https://console.ng.bluemix.net/registration/) 
1. After log in choose Document Conversion from [services](https://console.ng.bluemix.net/catalog/?category=watson)
2. Connect Document Conversion to your application at the left side, choose pricing plan and click on 'Create' button at the bottom of the page.
3. Click on 'Service Credentials' tab to see your username and password.

# Configuration
`normalizedHtml`, `headingFonts`, `headingStyles` fields format
"Specifies the values to identify the main content that is not converted. If this value is set, anything that matches one of the xpaths is excluded from the output
#### `normalizedHtml` format:
| Field                      | Type       | Description
|----------------------------|------------|----------
| exclude_tags_completely    | String     | Defines tags that should be removed completely with their content. Valid values are a list of tags.
| exclude_tags_keep_content  | String     | Defines tags that should be removed, but content is kept. Valid values are a list of tags.
| keep_content.xpaths        | String     | Specifies the values to identify the main content that is not converted. If this value is set, anything that matches one of the xpaths is excluded from the output
| exclude_content.xpaths     | String     | Specifies a list of xpaths that identify content that is converted. If this value is set, anything that matches one of the xpaths are included in the output. The inclusions specified by this parameter are processed after any processing specified by `exclude_content_xpaths`.
| keep_tag_attributes        | String     | List of attributes to keep in the HTML tags. Can only be specified if exclude_tag_attributes is not specified. Valid values are EVENT_ACTIONS, *, or an array of individual attributes. Selecting EVENT_ACTIONS includes all of the JavaScript action attributes. Selecting * includes all attributes. For best results, include rowspan, colspan, and border.
| exclude_tag_attributes     | String     | List of attributes to strip from the HTML tags. Can only be specified if keep_tag_attributes is not specified. Valid values are EVENT_ACTIONS, *, or an array of individual attributes. Selecting EVENT_ACTIONS excludes all of the JavaScript action attributes. Selecting * excludes all attributes. For best results, do not exclude rowspan, colspan, or border.

#### `headingFonts` item format
| Field    | Type    | Description
|----------|---------|----------
| level    | Number  | **Required** when defining any other font value. Heading level to be generated. When specifying a list of heading values, the first configuration in each heading list that matches something from the input document is the configuration that is applied to the conversion to create that heading type. Valid values are 1 (h1), 2 (h2), 3 (h3), 4 (h4), 5 (h5), and 6 (h6).
| min_size | Number  | Minimum size font to be converted into the defined heading level. Default is 0. Valid values are any font size above 0.
| max_size | Number  | Maximum size to be converted into the defined heading level. Valid values are any font size larger than the minimum font size.
| bold     | Boolean | Matches if the input is bold. Set to true when the input font that you want to be converted into a particular heading is bold. Set to false when the font isn't bold. Not setting this configuration means that the conversion ignores whether the input is bold.
| italic   | Boolean | Matches if the input is italic. Set to true when the input font that you want to be converted into a particular heading is italic. Set to false when the font isn't italic. Default value is false.
| name     | String  | The name of the input font. If not defined all font names will be matched. Valid values are font names.

#### `headingStyles` item format
| Field    | Type         | Description
|----------|--------------|----------
| level    | Number       | **Required** when defining any other style value. Heading level to be generated. When specifying a list of heading values, the first configuration in each heading list that matches something from the input document is the configuration that is applied to the conversion to create that heading type Valid values are 1 (h1), 2 (h2), 3 (h3), 4 (h4), 5 (h5), and 6 (h6).
| names    | JSON Array   | A list of style names that should be considered a heading in the conversion. Valid values are an array of style names.

---

## IBMWatsonDocumentConversion.convertHtmlToJsonUnits
Converts a `html` document to JSON answer units.

| Field         | Type       | Description
|---------------|------------|----------
| username      | credentials| Username obtained from IBM Bluemix.
| password      | credentials| Password obtained from IBM Bluemix.
| file          | File       | The `html` file to convert. Maximum file size is 50 MB.
| selectorTags  | JSON       | JSON Array. Defines the heading level that splits into answer units. Valid values are h1, h2, h3, h4, h5, h6, or an array of these values. By default, h1 and h2 headings with their content are split into answer units.
| normalizedHtml| JSON       | An object that defines the content that is included and excluded during the HTML normalization phase. All documents go through this phase. For more information about the normalized_html configurations.


#### `selectorTags` field example: 
```json
"selectorTags": ["h1","h2","h3","h4","h5","h6"]
```

#### `normalizedHtml` field example: 
```json
"normalizedHtml": {
	"exclude_tags_completely":["script", "sup"],
    "exclude_tags_keep_content":["font", "em", "span"],
    "keep_content":{"xpaths":["//body/div[@id='content']"]},
    "exclude_content":{"xpaths":["//*[@id='footer']","//*[@id='navigation']"]},
    "keep_tag_attributes":["*"]
}
```

## IBMWatsonDocumentConversion.convertHtmlToPlainText
Converts a `html` document to plain text.

| Field         | Type       | Description
|---------------|------------|----------
| username      | credentials| Username obtained from IBM Bluemix.
| password      | credentials| Password obtained from IBM Bluemix.
| file          | File       | The `html` file to convert. Maximum file size is 50 MB.
| normalizedHtml| JSON       | An object that defines the content that is included and excluded during the HTML normalization phase. All documents go through this phase. For more information about the normalized_html configurations.

#### `normalizedHtml` field example: 
```json
"normalizedHtml": {
	"exclude_tags_completely":["script", "sup"],
    "exclude_tags_keep_content":["font", "em", "span"],
    "keep_content":{"xpaths":["//body/div[@id='content']"]},
    "exclude_content":{"xpaths":["//*[@id='footer']","//*[@id='navigation']"]},
    "keep_tag_attributes":["*"]
}
```

## IBMWatsonDocumentConversion.convertHtmlToNormalizedHTML
Converts a `html` document to normalized HTML.

| Field         | Type       | Description
|---------------|------------|----------
| username      | credentials| Username obtained from IBM Bluemix.
| password      | credentials| Password obtained from IBM Bluemix.
| file          | File       | The `html` file to convert. Maximum file size is 50 MB.
| normalizedHtml| JSON       | An object that defines the content that is included and excluded during the HTML normalization phase. All documents go through this phase. For more information about the normalized_html configurations.

#### `normalizedHtml` field example: 
```json
"normalizedHtml": {
	"exclude_tags_completely":["script", "sup"],
    "exclude_tags_keep_content":["font", "em", "span"],
    "keep_content":{"xpaths":["//body/div[@id='content']"]},
    "exclude_content":{"xpaths":["//*[@id='footer']","//*[@id='navigation']"]},
    "keep_tag_attributes":["*"]
}
```

## IBMWatsonDocumentConversion.convertPDFToJsonUnits
Converts a `pdf` document to json answer units.

| Field         | Type       | Description
|---------------|------------|----------
| username      | credentials| Username obtained from IBM Bluemix.
| password      | credentials| Password obtained from IBM Bluemix.
| file          | File       | The `pdf` file to convert. Maximum file size is 50 MB.
| selectorTags  | JSON       | JSON Array. Defines the heading level that splits into answer units. Valid values are h1, h2, h3, h4, h5, h6, or an array of these values. By default, h1 and h2 headings with their content are split into answer units.
| normalizedHtml| JSON       | An object that defines the content that is included and excluded during the HTML normalization phase. All documents go through this phase. For more information about the normalized_html configurations.
| headingFonts  | JSON       | JSON Array. PDF heading font configurations. 

#### `selectorTags` field example: 
```json
"selectorTags": ["h1","h2","h3","h4","h5","h6"]
```

#### `normalizedHtml` field example: 
```json
"normalizedHtml": {
	"exclude_tags_completely":["script", "sup"],
    "exclude_tags_keep_content":["font", "em", "span"],
    "keep_content":{"xpaths":["//body/div[@id='content']"]},
    "exclude_content":{"xpaths":["//*[@id='footer']","//*[@id='navigation']"]},
    "keep_tag_attributes":["*"]
}
```

## IBMWatsonDocumentConversion.convertPDFToPlainText
Converts a `pdf` document to plain text.

| Field         | Type       | Description
|---------------|------------|----------
| username      | credentials| Username obtained from IBM Bluemix.
| password      | credentials| Password obtained from IBM Bluemix.
| file          | File       | The `pdf` file to convert. Maximum file size is 50 MB.
| normalizedHtml| JSON       | An object that defines the content that is included and excluded during the HTML normalization phase. All documents go through this phase. For more information about the normalized_html configurations.
| headingFonts  | JSON       | JSON Array. PDF heading font configurations. 

#### `headingFonts` filed example
```json
"headingFonts": [
    {"level": 1, "min_size": 24},
    {"level": 2, "min_size": 18, "max_size": 23, "bold": true},
    {"level": 3, "min_size": 14, "max_size": 17, "italic": false},
    {"level": 4, "min_size": 12, "max_size": 13, "name": "Times New Roman"}
]
```

#### `normalizedHtml` field example: 
```json
"normalizedHtml": {
	"exclude_tags_completely":["script", "sup"],
    "exclude_tags_keep_content":["font", "em", "span"],
    "keep_content":{"xpaths":["//body/div[@id='content']"]},
    "exclude_content":{"xpaths":["//*[@id='footer']","//*[@id='navigation']"]},
    "keep_tag_attributes":["*"]
}
```

## IBMWatsonDocumentConversion.convertPDFToNormalizedHTML
Converts a `pdf` document to normalized HTML.

| Field         | Type       | Description
|---------------|------------|----------
| username      | credentials| Username obtained from IBM Bluemix.
| password      | credentials| Password obtained from IBM Bluemix.
| file          | File       | The `pdf` file to convert. Maximum file size is 50 MB.
| normalizedHtml| JSON       | An object that defines the content that is included and excluded during the HTML normalization phase. All documents go through this phase. For more information about the normalized_html configurations.
| headingFonts  | JSON       | JSON Array. PDF heading font configurations. 

#### `headingFonts` filed example
```json
"headingFonts": [
    {"level": 1, "min_size": 24},
    {"level": 2, "min_size": 18, "max_size": 23, "bold": true},
    {"level": 3, "min_size": 14, "max_size": 17, "italic": false},
    {"level": 4, "min_size": 12, "max_size": 13, "name": "Times New Roman"}
]
```

#### `normalizedHtml` field example: 
```json
"normalizedHtml": {
	"exclude_tags_completely":["script", "sup"],
    "exclude_tags_keep_content":["font", "em", "span"],
    "keep_content":{"xpaths":["//body/div[@id='content']"]},
    "exclude_content":{"xpaths":["//*[@id='footer']","//*[@id='navigation']"]},
    "keep_tag_attributes":["*"]
}
```

## IBMWatsonDocumentConversion.convertMicrosoftWordToJsonUnits
Converts a `Microsoft Word™` document to json answer units.

| Field         | Type       | Description
|---------------|------------|----------
| username      | credentials| Username obtained from IBM Bluemix.
| password      | credentials| Password obtained from IBM Bluemix.
| file          | File       | The `msword` file to convert. Maximum file size is 50 MB.
| selectorTags  | JSON       | JSON Array. Defines the heading level that splits into answer units. Valid values are h1, h2, h3, h4, h5, h6, or an array of these values. By default, h1 and h2 headings with their content are split into answer units.
| normalizedHtml| JSON       | An object that defines the content that is included and excluded during the HTML normalization phase. All documents go through this phase. For more information about the normalized_html configurations.
| headingFonts  | JSON       | JSON Array. Word heading font configurations. 
| headingStyles | JSON       | JSON Array. Word heading styles configurations. 

#### `headingFonts` filed example
```json
"headingFonts": [
    {"level": 1, "min_size": 24},
    {"level": 2, "min_size": 18, "max_size": 23, "bold": true},
    {"level": 3, "min_size": 14, "max_size": 17, "italic": false},
    {"level": 4, "min_size": 12, "max_size": 13, "name": "Times New Roman"}
]
```

#### `headingStyles` filed example
```json
"headingFonts": [
    {"level": 1, "names": ["pullout heading", "pulloutheading", "heading"]},
    {"level": 2, "names": ["subtitle"]}
]
```

#### `normalizedHtml` field example: 
```json
"normalizedHtml": {
	"exclude_tags_completely":["script", "sup"],
    "exclude_tags_keep_content":["font", "em", "span"],
    "keep_content":{"xpaths":["//body/div[@id='content']"]},
    "exclude_content":{"xpaths":["//*[@id='footer']","//*[@id='navigation']"]},
    "keep_tag_attributes":["*"]
}
```

## IBMWatsonDocumentConversion.convertMicrosoftWordToPlainText
Converts a `Microsoft Word™` document to plain text.

| Field         | Type       | Description
|---------------|------------|----------
| username      | credentials| Username obtained from IBM Bluemix.
| password      | credentials| Password obtained from IBM Bluemix.
| file          | File       | The `msword` file to convert. Maximum file size is 50 MB.
| normalizedHtml| JSON       | An object that defines the content that is included and excluded during the HTML normalization phase. All documents go through this phase. For more information about the normalized_html configurations.
| headingFonts  | JSON       | JSON Array. Word heading font configurations. 
| headingStyles | JSON       | JSON Array. Word heading styles configurations. 

#### `headingFonts` filed example
```json
"headingFonts": [
    {"level": 1, "min_size": 24},
    {"level": 2, "min_size": 18, "max_size": 23, "bold": true},
    {"level": 3, "min_size": 14, "max_size": 17, "italic": false},
    {"level": 4, "min_size": 12, "max_size": 13, "name": "Times New Roman"}
]
```

#### `headingStyles` filed example
```json
"headingFonts": [
    {"level": 1, "names": ["pullout heading", "pulloutheading", "heading"]},
    {"level": 2, "names": ["subtitle"]}
]
```

#### `normalizedHtml` field example: 
```json
"normalizedHtml": {
	"exclude_tags_completely":["script", "sup"],
    "exclude_tags_keep_content":["font", "em", "span"],
    "keep_content":{"xpaths":["//body/div[@id='content']"]},
    "exclude_content":{"xpaths":["//*[@id='footer']","//*[@id='navigation']"]},
    "keep_tag_attributes":["*"]
}
```

## IBMWatsonDocumentConversion.convertMicrosoftWordToNormalizedHTML
Converts a `Microsoft Word™` document to normalized HTML.

| Field         | Type       | Description
|---------------|------------|----------
| username      | credentials| Username obtained from IBM Bluemix.
| password      | credentials| Password obtained from IBM Bluemix.
| file          | File       | The `msword` file to convert. Maximum file size is 50 MB.
| normalizedHtml| JSON       | An object that defines the content that is included and excluded during the HTML normalization phase. All documents go through this phase. For more information about the normalized_html configurations.
| headingFonts  | JSON       | JSON Array. Word heading font configurations. 
| headingStyles | JSON       | JSON Array. Word heading styles configurations.

#### `headingFonts` filed example
```json
"headingFonts": [
    {"level": 1, "min_size": 24},
    {"level": 2, "min_size": 18, "max_size": 23, "bold": true},
    {"level": 3, "min_size": 14, "max_size": 17, "italic": false},
    {"level": 4, "min_size": 12, "max_size": 13, "name": "Times New Roman"}
]
```

#### `headingStyles` filed example
```json
"headingFonts": [
    {"level": 1, "names": ["pullout heading", "pulloutheading", "heading"]},
    {"level": 2, "names": ["subtitle"]}
]
```

#### `normalizedHtml` field example: 
```json
"normalizedHtml": {
	"exclude_tags_completely":["script", "sup"],
    "exclude_tags_keep_content":["font", "em", "span"],
    "keep_content":{"xpaths":["//body/div[@id='content']"]},
    "exclude_content":{"xpaths":["//*[@id='footer']","//*[@id='navigation']"]},
    "keep_tag_attributes":["*"]
}
``` 

## IBMWatsonDocumentConversion.indexHtmlDocument
Prepares a document for the Retrieve and Rank service as part of an Enhanced Information Retrieval solution, then adds the content to your Solr index so you can search it.

| Field                           | Type       | Description
|---------------------------------|------------|----------
| username                        | credentials| Username obtained from IBM Bluemix.
| password                        | credentials| Password obtained from IBM Bluemix.
| file                            | File       | The file to index. Required if the metadata object is not included. Maximum file size is 50 MB. The API detects the MIME type, but you can specify it if incorrect. Acceptable MIME type values are text/html, text/xhtml+xml, application/pdf, application/msword, and application/vnd.openxmlformats-officedocument.wordprocessingml.document.
| metadata                        | JSON       | A metadata part that describes the external metadata of the file. Required if the file is not included. You might call this method without a file part when there is no document content to index (for example, with a database connector). Maximum size of the part is 1 MB.
| normalizedHtml                  | JSON       | An object that defines the content that is included and excluded during the HTML normalization phase. All documents go through this phase. For more information about the normalized_html configurations.
| retrieveAndRankDryRun           | Boolean    | The dryRun property defaults to false. Set it to true to test how your document is indexed. When set to true, service_instance_id, cluster_id, and search_collection are optional.
| retrieveAndRankServiceInstanceId| String     | The identifier or your Retrieve and Rank service. Required if dry_run is not set to false. To find your service_instance_id, click the tile for your service in Bluemix, and then look at the URL in the browser for the serviceGuid= request parameter. The value for service_instance_id is the value for serviceGuid.
| retrieveAndRankClusterId        | String     | Matches the value of solr_cluster_id in your Retrieve and Rank service. Required if dry_run is not set to false.
| retrieveAndRankSearchCollection | String     | Matches the value of collection_name in your Retrieve and Rank service. Required if dry_run is not set to false.
| retrieveAndRankFieldsMappings   | JSON       | An array of objects to specify how to connect metadata fields in the file to fields in SOLR. Use the syntax "mappings"{"from":"field_in_doc","to":"field_in_SOLR"}].
| retrieveAndRankFieldsInclude    | JSON       | An array of fields in the file to include from Retrieve and Rank. To specify the allowed fields, provide only the include object. When you provide an include object, fields that are not included are excluded. Use the syntax "include":["field3_in_SOLR"].
| retrieveAndRankFieldsExclude    | JSON       | An array of fields to exclude from Retrieve and Rank. To exclude a few fields and allow all others, provide only the exclude object. Fields that are not excluded are allowed. Follows the syntax "exclude":["field1_in_SOLR","field2_in_SOLR"].

## IBMWatsonDocumentConversion.indexExternalMetadata
Prepares a metadata object for the Retrieve and Rank service as part of an Enhanced Information Retrieval solution, then adds the content to your Solr index so you can search it.

| Field                           | Type       | Description
|---------------------------------|------------|----------
| username                        | credentials| Username obtained from IBM Bluemix.
| password                        | credentials| Password obtained from IBM Bluemix.
| file                            | File       | The `msword` file to convert. Maximum file size is 50 MB.
| metadata                        | JSON       | A metadata part that describes the external metadata of the file. Required if the file is not included. You might call this method without a file part when there is no document content to index (for example, with a database connector). Maximum size of the part is 1 MB.
| normalizedHtml                  | JSON       | An object that defines the content that is included and excluded during the HTML normalization phase. All documents go through this phase. For more information about the normalized_html configurations.
| retrieveAndRankDryRun           | Boolean    | The dryRun property defaults to false. Set it to true to test how your document is indexed. When set to true, service_instance_id, cluster_id, and search_collection are optional.
| retrieveAndRankServiceInstanceId| String     | The identifier or your Retrieve and Rank service. Required if dry_run is not set to false. To find your service_instance_id, click the tile for your service in Bluemix, and then look at the URL in the browser for the serviceGuid= request parameter. The value for service_instance_id is the value for serviceGuid.
| retrieveAndRankClusterId        | String     | Matches the value of solr_cluster_id in your Retrieve and Rank service. Required if dry_run is not set to false.
| retrieveAndRankSearchCollection | String     | Matches the value of collection_name in your Retrieve and Rank service. Required if dry_run is not set to false.
| retrieveAndRankFieldsMappings   | JSON       | An array of objects to specify how to connect metadata fields in the file to fields in SOLR. Use the syntax mappings"{"from":"field_in_doc","to":"field_in_SOLR"}].
| retrieveAndRankFieldsInclude    | JSON       | An array of fields in the file to include from Retrieve and Rank. To specify the allowed fields, provide only the include object. When you provide an include object, fields that are not included are excluded. Use the syntax "include":["field3_in_SOLR"].
| retrieveAndRankFieldsExclude    | JSON       | An array of fields to exclude from Retrieve and Rank. To exclude a few fields and allow all others, provide only the exclude object. Fields that are not excluded are allowed. Follows the syntax "exclude":["field1_in_SOLR","field2_in_SOLR"].

#### `metadata` filed example
```json
"metadata": {
	"custom_key": "customValue"
}
```

#### `normalizedHtml` field example: 
```json
"normalizedHtml": {
	"exclude_tags_completely":["script", "sup"],
}
```

#### `retrieveAndRankFieldsMappings` field example: 
```json
"retrieveAndRankFieldsMappings": [
	{"from":"field_in_doc","to":"field_in_SOLR"}
]
```

#### `retrieveAndRankFieldsInclude` field example: 
```json
"retrieveAndRankFieldsInclude": ["field3_in_SOLR"]
```

#### `retrieveAndRankFieldsExclude` field example: 
```json
"retrieveAndRankFieldsExclude": ["field1_in_SOLR","field2_in_SOLR"]
```

