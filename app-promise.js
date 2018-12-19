const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
})
    .help()
    .alias('help', 'h')
    .argv;

var encodedAddress = encodeURIComponent(argv.address);
geocodeUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=olTmnBj8MAnfM1vRNUgzuAtX3Tn6OZLa&location=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('unable to find that address');
    }
    var lat = response.data.results[0].locations[0].latLng.lat;
    var lng = response.data.results[0].locations[0].latLng.lng;
    var weatherURL = `https://api.darksky.net/forecast/d51cff0e37fc98a392bc2a37c6d4c3b5/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
}).then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature} it feels like ${apparentTemperature}`);
} ).catch((e) => {
    if (e.code === 'ENOTFOUND') {
        console.log('Unable to connect to api service.')
    } else {
        console.log(e.message);
    }
   
});
