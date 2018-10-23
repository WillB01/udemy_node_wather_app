const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');

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
geocode.fetchLocation(userSearch);



