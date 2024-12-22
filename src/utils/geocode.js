const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://us1.locationiq.com/v1/search?key=pk.d07503cd91ddcd5bb1c67582eab034a0&q=" +
    encodeURIComponent(address) +
    "&format=json&limit=1";
  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to Connect to location services!", undefined);
    } else if (body.error) {
      callback("Unable to find location!", undefined);
    } else {
      callback(undefined, {
        latitude: body[0].lat,
        longitude: body[0].lon,
        location: body[0].display_name,
      });
    }
  });
};

module.exports = geocode;
