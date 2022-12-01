
const { zip } = require('zip-a-folder');
const fs = require('fs');
const axios = require('axios').default;
const s3PayLoad = require('./buildPayloadToS3')

const groupName = 'FPOn';
let chromeDirName = 'reports/chrome/results';
let chromeZipName = 'chrome-report';
const url = 'https://api-qe.nedigital.sg/util/upload-to-s3';
let reportURL = `https://s3-ap-southeast-1.amazonaws.com/web-test-results.web/${groupName}/chrome-report`;
 

const readDirReport = async function (fName,fDir,callback) {
    try {
        var folder = fs.readFileSync('reports/report-folder.txt', 'utf8');  
    } catch(e) {
        console.log('Error:', e.stack);
    }
    chromeZipName = fName + folder + '.zip';
    chromeDirName = fDir + '/WebAutomationReports/' +folder;
    reportURL = reportURL + folder + '/index.html'
    
}

const ZipFolder = async function(zipName,dir){ 
    await readDirReport(zipName,dir);
    console.log(chromeZipName);

    const payloadZip = { pay: {} };
    await zip(chromeDirName,chromeZipName)
                .then(data => {
                    console.log(`Successfully Compress ${chromeZipName}`);
                }).catch(error => {
                    console.log(`Failed to Compress ${chromeZipName}`,error);
                })
    let buffZip =  fs.readFileSync(chromeZipName);
    let base64data = buffZip.toString('base64');
    payloadZip.pay = s3PayLoad.buildPayloadToS3(chromeZipName,base64data);

    await axios.post(url,payloadZip.pay)
                .then(data => {
                    console.log(`File ${chromeZipName} Successfully Uploaded to the Bucket`);
                }).catch(error => {
                    console.log('Error Uploading to S3 :'+ error);
                })  
    console.log(reportURL);                   
}

ZipFolder(chromeZipName,chromeDirName);

module.exports = ZipFolder;