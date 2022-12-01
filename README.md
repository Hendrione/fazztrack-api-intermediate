# FPON Web Automation Testing
- Written with wdio and NED QE boilerplate, 2x times faster than previous one
- Much more cleaner, drive by keywords actions

## Run
- `npm test`
- Running with tags `npm test -- --cucumberOpts.tagExpression '@Categories' `

## Reporter
- CucumberJSON Report must be put under reports/json
- Can combine with previous version report, as long as put the file under reports/json
- Automatically aggregate the report by run `npm run reporter`