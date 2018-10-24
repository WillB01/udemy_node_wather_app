const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const fetchWeather = require('./geocode/fetchWeather.js');
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

geocode.fetchLocation(userSearch, (errorMessage, results) => {
    errorMessage 
    ? console.log(errorMessage) 
    : fetchWeather.fetchWeather(results, (error, result) => {
        error ? console.log(error) : console.log(result.currently);
    });
});





