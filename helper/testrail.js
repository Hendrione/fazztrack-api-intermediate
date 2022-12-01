var Testrail = require('testrail-api');


 class testrail{

    constructor (){
          this.testrail = new Testrail({
            host: 'https://ntuclink.testrail.net/',
            user: process.env.testrail_user,
            password: process.env.testrail_password
          });
    }

    get_tests = async function (runID) {
        let test_cases = [];
        await this.testrail.getTests(runID, {}).then(function (tests){
               for (let tc of tests.body){
                   test_cases.push(tc.case_id);
               }
        }).catch(function (error){
             console.log('error get tests from template');
        })
        return test_cases;  
    }

    get_current_timestamp = async function () {
        let date_ob = new Date();
        let date = ("0" + date_ob.getDate()).slice(-2);
        let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
        let year = date_ob.getFullYear();
        let hours = date_ob.getHours();
        let minutes = date_ob.getMinutes();
        let seconds = date_ob.getSeconds();   
        return year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;;
    }

    add_run_payload = async function (testRunID,trName='FPOn Production Monitoring Web Test') {
       let tc = await this.get_tests(testRunID);
       let cd = await this.get_current_timestamp();
       return {include_all:false,name:trName+' '+cd,case_ids:tc}
    }

    add_run = async function (projectID,testRunID) {
        let payload = await this.add_Run_payload(testRunID);
        await this.testrail.addRun(projectID,payload).then(function (result){
            console.log (result.body);
            process.env['runIDProd'] = result.body.id;
            process.env['testRun'] = 'YES';
        }).catch(function (error){
            console.log(error);
       });
    }

    add_plan_entry_payload = async function (testRunID,trName='FPOn Production Monitoring Web Test'){
        let tc = await this.get_tests(testRunID);
        let cd = await this.get_current_timestamp();
        return {   
            name:trName+' '+cd, 
            suite_id: process.env.testrail_suite_id,
            include_all: true,         
            config_ids: [process.env.testrail_config_ids],
            runs: [
                {  
                    include_all: false, 
                    config_ids: [process.env.testrail_config_ids],
                    case_ids: tc
                }
            ]    
        }
    }

    add_plan_entry = async function (planID,testRunID){
        let payload = await this.add_plan_entry_payload(testRunID);
        await this.testrail.addPlanEntry(planID, payload).then(function (result){
            process.env['runIDProd'] = result.body.runs[0].id;
            process.env['testRun'] = 'YES';
            console.log(process.env['runIDProd']);
        }).catch(function (error){
            console.log(error);
       });
    }
}


module.exports = testrail;
