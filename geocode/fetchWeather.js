const request = require('request');
const k = require('../k.js');

const fetchWeather = (positionObj ,callback) => {
    request({
        url: k.wu(positionObj.latitude, positionObj.longitude),
        json: true
    }, (error, response, body) => {
        if (error) {
            callback(error);
        }
        callback(undefined, body)
    });
};

module.exports = {
    fetchWeather
}
