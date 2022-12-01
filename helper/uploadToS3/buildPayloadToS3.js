function buildPayloadToS3(zipName,zipFile,groupName='FPOn'){
    return {
            "raw": zipFile,
            "bucketName": "web-test-results.web",
            "uploadGroupName": groupName,
            "uploadFileName": zipName,
            "contentType": "application/zip",
            "ACL": "public-read",
            "needExtract": true
        };
  }

function buildPayloadUnzip(zipName){
    return {
        "bucketName" : "web-test-results.web",
        "filePath" : zipName
    }

}
  
  module.exports.buildPayloadToS3 = buildPayloadToS3;
  module.exports.buildPayloadUnzip = buildPayloadUnzip;