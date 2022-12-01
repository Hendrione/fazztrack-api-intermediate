const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: 'reports/json/',
  reportPath: 'reports/html/',
  // displayDuration: true,
  openReportInBrowser: true,
  // metadata: {
  //   browser: {
  //     name: 'chrome',
  //     version: '91',
  //   },
  //   device: 'Docker Hub',
  //   platform: {
  //     name: 'ubuntu',
  //     version: '16.04',
  //   },
  // },
  // customData: {
  //   title: 'Run info',
  //   data: [
  //     { label: 'Project', value: 'Koligrum' },
  //     { label: 'Written by', value: 'Koligrum' },
      // { label: 'Repo', value: 'https://bitbucket.org/bizzyindonesia/phoenix-backoffice-web.git' },
    // ],
  // },
});
