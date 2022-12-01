const axios = require('axios').default;

const USERNAME = process.env.BSUSERNAME;
const AUTOMATE_KEY = process.env.BSKEY;

var headers = {
    'Content-Type': 'application/json'
};

const updateTestResult = async(status,reason,sessionID) => {
  await axios({
    method:'PUT',
    url:'https://api.browserstack.com/automate/sessions/'+sessionID+'.json',
    headers:headers,
    data:{"status":status, "reason":reason},
    auth:{username:USERNAME,password:AUTOMATE_KEY}
  }).then(data=>{
      console.log('Successfully Update to Browser Stack');
  }).catch(error=>{
      console.log('Error Update to Browser Stack: '+error);
  })
}

module.exports = updateTestResult;