const request = require("request");
const baseURL = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchBreedDescription = function(breedName, callback) {
  request(`${baseURL}${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (data.length > 0) {
        callback(null, data[0].description);
      } else {
        callback(null, null);
      }
    }
  });
};

module.exports = { fetchBreedDescription };
