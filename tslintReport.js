const tslintHtmlReport = require('tslint-html-report')

const config = {
  tslint: 'tslint.json', // path to tslint.json
  srcFiles: 'src/**/*.ts', // files to lint
  outDir: 'test/coverage/lcov-report', // output folder to write the report to
  html: 'tslint-report.html', // name of the html report generated
  breakOnError: false, // Should it throw an error in tslint errors are found
  typeCheck: true, // enable type checking. requires tsconfig.json
  tsconfig: 'tsconfig.json', // path to tsconfig.json
}

tslintHtmlReport(config)
