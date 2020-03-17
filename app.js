const request = require('request')

const weatherUrl = 'https://api.darksky.net/forecast/2140fc87b0dc7a105465336f7da3eaa6/37.8267,-122.4233'

request({ url: weatherUrl, json: true }, (error, response) => {

    if (error) {
        console.log("Error, Cannot reach weather service!")
    } else if (response.body.error) {
        console.log("Error, unable to find location")
    } else {
        const body = response.body
        const currently = body.currently
        const summary = body.daily.data[0].summary
        const temp = currently.temperature
        const precip = currently.precipProbability
        console.log(`Summary: ${summary} It is currently ${temp} degrees. There is a ${precip}% chance of rain.`)
    }
})

const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/08807.json?access_token=pk.eyJ1Ijoic3N0cm9vbCIsImEiOiJjaWh4c2k2engwM2d5dDdraHdvaGJyaXg4In0.OYqqAFNbYfAhyJMVF0nOEQ&limit=1'

request({ url: geoUrl, json: true }, (error, response) => {
    if (error) {
        console.log("Error, Cannot reach location service!")
    } else if (response.body.features.length === 0) {
        console.log("Error, unable to find location")
    } else {
        const body = response.body
        const location = body.features[0].text
        const latitude = body.features[0].center[1]
        const longitude = body.features[0].center[0]
        console.log(`${location}: latitude: ${latitude} longitude: ${longitude}`)
    }
})
