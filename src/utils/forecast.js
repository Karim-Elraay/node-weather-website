const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.weatherstack.com/current?access_key=7c2a9c8806ca2352f14893d5b4f11949&query=" +
    encodeURIComponent(latitude) +
    "," +
    encodeURIComponent(longitude);

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(undefined, {
        description: body.current.weather_descriptions[0],
        temperature: body.current.temperature,
        feelslike: body.current.feelslike,
        cloudcover: body.current.cloudcover,
      });
    }
  });
};

module.exports = forecast;
