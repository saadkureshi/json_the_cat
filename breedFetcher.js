const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  if (!breedName) {
    throw new Error("Please specify a breed.");
  }
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error || JSON.parse(body)[0] === undefined) {
      callback(error, null);
    } else {
      callback(null, JSON.parse(body)[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };