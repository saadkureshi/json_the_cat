const request = require('request');
const args = process.argv.slice(2);
const requestedBreed = args[0];

if (!requestedBreed) {
  throw new Error("Please specify a breed.");
}

request(`https://api.thecatapi.com/v1/breeds/search?q=${requestedBreed}`, (error, response, body) => {
  if (error) {
    throw new Error("Unable to complete request.", error);
  }
  if (!(body === "[]")) {
    const data = JSON.parse(body);
    const desc = data[0].description;
    console.log(requestedBreed, ":", desc);
  } else {
    console.log("Breed details not found.");
  }

});