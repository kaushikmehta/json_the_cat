const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response) => {
    if (error) {
      callback(error, null);
    } else {
      let result;
      const data = JSON.parse(response.body);
      data.length === 0 ? result = (`Could not find breed: ${breedName}`) : result = (data[0].description);
      callback(null, result);
    }
  });
};

module.exports = { fetchBreedDescription };
