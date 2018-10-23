const request = require('request');
const yargs = require('yargs');
const a = require('./k.js');

const argv = yargs.options({
    a: {
        demand: true,
        alias: 'adress',
        describe: 'Addres to fetch weather for',
        string: true
    }
})
.help()
.alias('help','h')
.argv;

const userSearch = argv.a;

request({
    url: a.u(userSearch),
    json: true
}, (error, response, body) => {
    const street = body.results[0].providedLocation.location;
    const lat = body.results[0].locations[0].latLng.lat;
    const lng = body.results[0].locations[0].latLng.lng;
    console.log(`Address: ${street}`);
    console.log(`Latitude: ${lat}`);
    console.log(`Longitude: ${lng}`);
});

