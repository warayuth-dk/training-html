const express = require('express');
const app = express();
const cors = require('cors');
const { default: axios } = require('axios');
const { response } = require('express');
require('dotenv').config();
const keyWeather = process.env.SECRET_WEATHER_KEY

app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
  res
    .status(200)
    .json({"email": "dukdik_2003@hotmail.com", "password": "123456789er"})
    .end();
});
app.post("/login", (req, res) => {
  var data = req.body;

  if (data.email === "dukdik_2003@hotmail.com" && data.password === "123456789er") {
    res.status(200).json({ msg: "login sucess", statusCode: 200 });
  } else {
    res.send("usernae or password incorrect");
  }
});
app.post('/wheather',(req,res)=>{
  var data = req.body;
  var appid = keyWeather;
  axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=${appid}`) 
  .then(function (response) {
    res.status(200).json({data:response.data, statusCode: 200 });
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  
})
 
// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});