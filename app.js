const request = require('request');
const a = require('./k.js');


request({
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=${a.k}&location=1301%20lombard%20street%20philadelphia`,
    json: true
}, (error, response, body) => {
    const street = body.results[0].providedLocation.location;
    const lat = body.results[0].locations[0].latLng.lat;
    const lng = body.results[0].locations[0].latLng.lng;
    console.log(`Address: ${street}`);
    console.log(`Latitude: ${lat}`);
    console.log(`Longitude: ${lng}`);
});