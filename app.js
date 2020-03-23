const request = require('request')
const geocode = require('./lib/geocode.js')
const forecast = require('./lib/forecast.js')
// const db = require('./lib/db.js')

const location = process.argv[2]
if (!location) {
    return console.log('Location Missing')
}

console.log(`Getting weather for ${location}...`)

geocode(location, (error, geoData) => {
    if (error) { return console.log('Error', error) }
    console.log('Data', geoData.location)
    forecast(geoData.latitude, geoData.longitude, (error, forecastData) => {
        if (error) { return console.log('Error', error) }
        { console.log('Weather:', forecastData) }
    })
})

