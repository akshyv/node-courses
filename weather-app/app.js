const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const command = process.argv[2];
geocode(command, (error, { latitude, longitude, location } = {}) => {
  if (command) {
    if (error) {
      return console.log(error);
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }

      console.log(location);
      console.log(forecastData);
    });
  } else {
    console.log("Please type a City's Name");
  }
});
