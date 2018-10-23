const request = require('request');
const a = require('../k.js');
const fetchLocation = (userSearch) => {
    request({
        url: a.u(userSearch),
        json: true
    }, (error, response, body) => {
        if (error) {
            console.log('Unable to connect!')
        } 
        const street = `${body.results[0].locations[0].street}, ${body.results[0].locations[0].postalCode}, ${body.results[0].locations[0].adminArea1}`;
        const lat = body.results[0].locations[0].latLng.lat;
        const lng = body.results[0].locations[0].latLng.lng;
        console.log(`Address: ${street}`);
        console.log(`Latitude: ${lat}`);
        console.log(`Longitude: ${lng}`);
    });
};

module.exports = {
    fetchLocation
}