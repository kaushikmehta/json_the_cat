const request = require('request');
const breed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response) => {
  if (error) {
    console.log(error);
  } else {
    const data = JSON.parse(response.body);
    data.length === 0 ? console.log(`Could not find breed: ${breed}`) : console.log(data[0].description);
  }

});