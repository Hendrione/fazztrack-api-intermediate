const report = require('multiple-cucumber-html-reporter');

const now =  Date.now();
const fs = require('fs');
fs.writeFile('reports/report-folder.txt',`${now}`,function(err,data){
  if (err) {
    return console.log(err);
  }
  console.log(data);
})
report.generate({
  jsonDir: 'reports/json/',
  reportPath: 'reports/html/'+`${now}`,
  displayDuration: true,
  openReportInBrowser: true,
  saveCollectedJSON: true
});


