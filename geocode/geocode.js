const request = require('request');
const a = require('../k.js');
const fetchLocation = (userSearch, callback) => {
    request({
        url: a.u(userSearch),
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect!');
        } 
        const adress = `${body.results[0].locations[0].street}, ${body.results[0].locations[0].postalCode}, ${body.results[0].locations[0].adminArea1}`;
        const latitude = body.results[0].locations[0].latLng.lat;
        const longitude = body.results[0].locations[0].latLng.lng;
        callback(undefined, {
            adress,
            latitude,
            longitude
        });
    });
};

module.exports = {
    fetchLocation
}