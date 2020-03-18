const request = require('request')
const geocode = require('./lib/geocode.js')
const forecast = require('./lib/forecast.js')


geocode('Boston', (error, data) => {
    if (error) { console.log('Error', error) }
    console.log('Data', data)
})

forecast(-75.7088, 44.1545, (error, data) => {
    if (error) { console.log('Error', error) }
    console.log('Data', data)
})