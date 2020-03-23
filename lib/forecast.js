///
//* Darksky integration
//  Secret Key: 2140fc87b0dc7a105465336f7da3eaa6
//  Sample URL: https://api.darksky.net/forecast/2140fc87b0dc7a105465336f7da3eaa6/37.8267,-122.4233
///
const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'https://api.darksky.net/forecast/2140fc87b0dc7a105465336f7da3eaa6/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) //37.8267,-122.4233'
    //const url = 'https://api.darksky.net/forecast/2140fc87b0dc7a105465336f7da3eaa6/37.8267,-122.4233'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Error, Cannot reach weather service!', undefined)
        } else if (response.body.error) {
            callback('Error, unable to find location', undefined)
        } else {
            callback(undefined, {
                summary: response.body.currently.icon,
                temperature: response.body.currently.temperature
            })
        }
    })
};

module.exports = forecast