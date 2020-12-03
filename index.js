const { fetchBreedDescription } = require('./breedFetcher');
const args = process.argv.slice(2);
const requestedBreed = args[0];

fetchBreedDescription(requestedBreed, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});