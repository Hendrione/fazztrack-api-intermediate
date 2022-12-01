const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: 'reports/json/',
  reportPath: 'reports/html/',
  displayDuration: true,
  openReportInBrowser: true,
  reportName:"Fairprice Web Production Monitoring"
});