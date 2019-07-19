const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const forecastURL = 'https://api.darksky.net/forecast/e7b9a02aafc67f486eb7319bd1059a89/' + encodeURIComponent(latitude + ',' + longitude) + ''

  request({ url: forecastURL, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to the weather sevice', undefined)
    } else if (response.body.error) {
      callback(response.body.error, undefined)
    } else {
      callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
    }
  })
}












module.exports = forecast