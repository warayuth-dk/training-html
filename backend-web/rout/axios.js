const axios = require('axios');

axios.get('https://api.openweathermap.org/data/2.5/weather?lat=17.161738449978607&lon=104.15704850616895&appid=87d2ed38c6f228bea471868f750aaaf9')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });