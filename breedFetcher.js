const request = require("request");
const baseURL = "https://api.thecatapi.com/v1/breeds/search?q=";
const searchCat = process.argv.slice(2);
request(`${baseURL}${searchCat}`, (error, response, body) => {
  if (error) {
    console.log("Error", error);
  } else {
    const data = JSON.parse(body);
    if (data.length > 0) {
      console.log(data[0].description);
    } else {
      console.log(`${searchCat} is not found!`);
    }
  }
});
