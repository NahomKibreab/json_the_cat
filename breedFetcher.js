const request = require("request");
const baseURL = "https://api.thecatapi.com/v1/breeds/search?q=";
const searchCat = process.argv.slice(2);
request(`${baseURL}${searchCat}`, (error, response, body) => {
  const data = JSON.parse(body);
  console.log(data[0].description);
});
