const request = require('request');

var getWeather = (lat, lng, callback) => {

request({
    url: `https://api.darksky.net/forecast/d51cff0e37fc98a392bc2a37c6d4c3b5/${lat},${lng}`,
    json: true
}, (error, response, body) => {
    if (!error && response.statusCode === 200) {
        callback(undefined, {
            temperature: body.currently.temperature,
            apparentTemperature: body.currently.apparentTemperature
        });
        (body.currently.temperature);
    } else {
        callback('Unable to fetch weather.');
    }
});
};

module.exports.getWeather = getWeather;