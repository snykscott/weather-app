///
//* mapbox integration
// my-weather-app token: sk.eyJ1Ijoic3N0cm9vbCIsImEiOiJjazd4cnB1MHowMGQ0M2trNHYzY25ycWhqIn0.bLWYka5ql3QCJOtfrGgD7Q
///
const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +
        '.json?access_token=sk.eyJ1Ijoic3N0cm9vbCIsImEiOiJjazd4cnB1MHowMGQ0M2trNHYzY25ycWhqIn0.bLWYka5ql3QCJOtfrGgD7Q&limit=1'
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('unable to connect to location service', undefined)
        } else if (response.body.features.length === 0) {
            callback('unable to find location', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
};

module.exports = geocode




//Original code//
// request({ url: geoUrl, json: true }, (error, response) => {
//     if (error) {
//         console.log("Error, Cannot reach location service!")
//     } else if (response.body.features.length === 0) {
//         console.log("Error, unable to find location")
//     } else {
//         const body = response.body
//         const location = body.features[0].text
//         const latitude = body.features[0].center[1]
//         const longitude = body.features[0].center[0]
//         console.log(`${location}: latitude: ${latitude} longitude: ${longitude}`)
//     }
// })
