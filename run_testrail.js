const testrail = require('./test/features/support/testrail');

  var test_rail = new testrail();
  test_rail.add_plan_entry(process.env.testrail_plan_id,process.env.testrail_run_id);
