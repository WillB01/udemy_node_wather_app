const request = require('request');
const a = require('./k.js');

request({
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=${a.k}&location=1301%20lombard%20street%20philadelphia`,
    json: true
}, (error, response, body) => {
    console.log(body);
});