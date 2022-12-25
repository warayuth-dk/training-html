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
app.get("/cart/:id", function (req, res) {
  let product = {
    data: [
      {
        Device: "Notebook Infinix Book X2 I5 71008300113 (Grey)",
        id: 1,
        price: 13900,
        prefix: "THB",
        gpu: " Intel UHD Graphics (Integrated)",
        cpu: " Intel i5-1035G1",
        ram: "8gb",
        ssd: "512GB",
        hhd: "",
      },
      {
        Device: "Notebook Acer Aspire A315-35-P9YL/T009 (Pure Silver)",
        id: 2,
        price: 11900,
        prefix: "THB",
        gpu: " Intel UHD Graphics (Integrated)",
        cpu: "Intel Pentium N6000 Processor",
        ram: "4gb",
        ssd: "256GB",
        hhd: "",
      },
      {
        Device: "Notebook Infinix Book X2 I7 71008300141(Grey)",
        id: 3,
        price: 12990,
        prefix: "THB",
        gpu: " Intel UHD Graphics (Integrated)",
        cpu: "Intel Pentium N6000 Processor",
        ram: "4gb",
        ssd: "512GB",
        hhd: " ",
      },
      {
        Device: "Notebook Infinix Book X2 I5 71008300113 (Grey)",
        id: 4,
        price: 16900,
        prefix: "THB",
        gpu: " Intel UHD Graphics (Integrated)",
        cpu: "Intel i7-1065G7",
        ram: "8gb",
        ssd: "512GB",
        hhd: " ",
      },
      {
        Device: "Notebook Infinix Book X2 I5 71008300113 (Grey)",
        id: 5,
        price: 12900,
        prefix: "THB",
        gpu: " Intel UHD Graphics (Integrated)",
        cpu: " Intel i3-1005G1",
        ram: "4gb",
        ssd: "512GB",
        hhd: " ",
      },
      {
        Device: "Notebook Infinix Book X2 I5 71008300113 (Grey)",
        id: 6,
        price: 15990,
        prefix: "THB",
        gpu: " Intel UHD Graphics (Integrated)",
        cpu: "AMD Athlon 3150U",
        ram: "8gb",
        ssd: "256GB",
        hhd: " ",
      },
      {
        Device: "Notebook Infinix Book X2 I5 71008300113 (Grey)",
        id: 7,
        price: 22990,
        prefix: "THB",
        gpu: " Intel UHD Graphics (Integrated)",
        cpu: "AMD Ryzen 5 5600H",
        ram: "8gb",
        ssd: "512GB",
        hhd: " ",
      },
      {
        Device: "Notebook Infinix Book X2 I5 71008300113 (Grey)",
        id: 8,
        price: 12900,
        prefix: "THB",
        gpu: " Intel UHD Graphics (Integrated)",
        cpu: "AMD Ryzen 3 5300U",
        ram: "4gb",
        ssd: "512GB",
        hhd: " ",
      },
      {
        Device: "Notebook Infinix Book X2 I5 71008300113 (Grey)",
        id: 9,
        price: 14900,
        prefix: "THB",
        gpu: " Intel UHD Graphics (Integrated)",
        cpu: " Intel i3-1115G4",
        ram: "4gb",
        ssd: "512GB",
        hhd: " ",
      },
      {
        Device: "Notebook Infinix Book X2 I5 71008300113 (Grey)",
        id: 10,
        price: 15990,
        prefix: "THB",
        gpu: " Intel UHD Graphics (Integrated)",
        cpu: " Intel i3-1215U",
        ram: "8gb",
        ssd: "256GB",
        hhd: " ",
      },
      {
        Device: "Notebook Infinix Book X2 I5 71008300113 (Grey)",
        id: 11,
        price: 74990,
        prefix: "THB",
        gpu: " GeForce RTX 3060 6GB GDDR6",
        cpu: " Intel i3-1215U",
        ram: "16gb",
        ssd: "1TB",
        hhd: " ",
      },
      {
        Device: "Notebook Infinix Book X2 I5 71008300113 (Grey)",
        id: 12,
        price: 16900,
        prefix: "THB",
        gpu: " Intel UHD Graphics (Integrated)",
        cpu: "AMD Ryzen 3 5300U",
        ram: "4gb",
        ssd: "512GB",
        hhd: " ",
      },
      {
        Device: "Notebook Infinix Book X2 I5 71008300113 (Grey)",
        id: 13,
        price: 11990,
        prefix: "THB",
        gpu: " Intel UHD Graphics (Integrated)",
        cpu: "Intel Pentium N5030",
        ram: "4gb",
        ssd: "512GB",
        hhd: " ",
      },
      {
        Device: "Notebook Infinix Book X2 I5 71008300113 (Grey)",
        id: 14,
        price: 21990,
        prefix: "THB",
        gpu: " Intel UHD Graphics (Integrated)",
        cpu: " Intel i3-1115G4",
        ram: "4gb",
        ssd: "256GB",
        hhd: " ",
      },
      {
        Device: "Notebook Infinix Book X2 I5 71008300113 (Grey)",
        id: 15,
        price: 24990,
        prefix: "THB",
        gpu: " Intel UHD Graphics (Integrated)",
        cpu: " Intel i5-1135G7",
        ram: "8gb",
        ssd: "512GB",
        hhd: " ",
      },
      {
        Device: "Notebook Infinix Book X2 I5 71008300113 (Grey)",
        id: 16,
        price: 28990,
        prefix: "THB",
        gpu: " Intel UHD Graphics (Integrated)",
        cpu: "AMD Ryzen 5 5600H",
        ram: "8gb",
        ssd: "512GB",
        hhd: " ",
      },
      {
        Device: "Notebook Infinix Book X2 I5 71008300113 (Grey)",
        id: 17,
        price: 31990,
        prefix: "THB",
        gpu: " Intel UHD Graphics (Integrated)",
        cpu: " Intel i5-12500H",
        ram: "8gb",
        ssd: "512GB",
        hhd: " ",
      },
      {
        Device: "Notebook Infinix Book X2 I5 71008300113 (Grey)",
        id: 18,
        price: 35990,
        prefix: "THB",
        gpu: " Intel UHD Graphics (Integrated)",
        cpu: " Intel i5-12500H",
        ram: "16gb",
        ssd: "512GB",
        hhd: " ",
      },
      {
        Device: "Notebook Infinix Book X2 I5 71008300113 (Grey)",
        id: 19,
        price: 41990,
        prefix: "THB",
        gpu: " Intel UHD Graphics (Integrated)",
        cpu: " Intel i5-12500H",
        ram: "16gb",
        ssd: "512GB",
        hhd: " ",
      },
      {
        Device: "Notebook Infinix Book X2 I5 71008300113 (Grey)",
        id: 20,
        price: 49990,
        prefix: "THB",
        gpu: " Intel UHD Graphics (Integrated)",
        cpu: " Intel i5-12500H",
        ram: "16gb",
        ssd: "1TB",
        hhd: " ",
      },
      {
        Device: "Notebook Infinix Book X2 I5 71008300113 (Grey)",
        id: 21,
        price: 28990,
        prefix: "THB",
        gpu: " Intel UHD Graphics (Integrated)",
        cpu: " Intel i5-12500H",
        ram: "8gb",
        ssd: "256GB",
        hhd: " ",
      },
      {
        Device: "Notebook Infinix Book X2 I5 71008300113 (Grey)",
        id: 22,
        price: 18900,
        prefix: "THB",
        gpu: " Intel UHD Graphics (Integrated)",
        cpu: " Intel i5-12500H",
        ram: "8gb",
        ssd: "512GB",
        hhd: " ",
      },
      {
        Device: "Notebook Infinix Book X2 I5 71008300113 (Grey)",
        id: 23,
        price: 23900,
        prefix: "THB",
        gpu: " Intel UHD Graphics (Integrated)",
        cpu: " Intel i5-12500H",
        ram: "8gb",
        ssd: "256GB",
        hhd: " ",
      },
      {
        Device: "Notebook Infinix Book X2 I5 71008300113 (Grey)",
        id: 24,
        price: 25900,
        prefix: "THB",
        gpu: " Intel UHD Graphics (Integrated)",
        cpu: " Intel i5-12500H",
        ram: "8gb",
        ssd: "512GB",
        hhd: " ",
      },
      {
        Device: "Notebook Infinix Book X2 I5 71008300113 (Grey)",
        id: 25,
        price: 27900,
        prefix: "THB",
        gpu: " Intel UHD Graphics (Integrated)",
        cpu: " Intel i5-12500H",
        ram: "8gb",
        ssd: "512GB",
        hhd: " ",
      },
      {
        Device: "Notebook Infinix Book X2 I5 71008300113 (Grey)",
        id: 26,
        price: 24900,
        prefix: "THB",
        gpu: " Intel UHD Graphics (Integrated)",
        cpu: " Intel i7-1165G7",
        ram: "8gb",
        ssd: "512GB",
        hhd: " ",
      },
      {
        Device: "Notebook Infinix Book X2 I5 71008300113 (Grey)",
        id: 27,
        price: 31900,
        prefix: "THB",
        gpu: " Intel UHD Graphics (Integrated)",
        cpu: "AMD Ryzen 7 5700U",
        ram: "8gb",
        ssd: "512GB",
        hhd: " ",
      },
      {
        Device: "Notebook Infinix Book X2 I5 71008300113 (Grey)",
        id: 28,
        price: 34900,
        prefix: "THB",
        gpu: " Intel UHD Graphics (Integrated)",
        cpu: "AMD Ryzen 7 5700U",
        ram: "8gb",
        ssd: "256GB",
        hhd: " ",
      },
      {
        Device: "Notebook Infinix Book X2 I5 71008300113 (Grey)",
        id: 29,
        price: 40900,
        prefix: "THB",
        gpu: " Intel UHD Graphics (Integrated)",
        cpu: " Intel i7-1255U",
        ram: "16gb",
        ssd: "512GB",
        hhd: " ",
      },
      {
        Device: "Notebook Infinix Book X2 I5 71008300113 (Grey)",
        id: 30,
        price: 21990,
        prefix: "THB",
        gpu: " Intel UHD Graphics (Integrated)",
        cpu: " Intel i7-1255U",
        ram: "8gb",
        ssd: "512GB",
        hhd: "",
        img: ""
      },
    ],
    statusCode: 200,
    message: "Get Product Successfully",
  };
  var dataProduct = [];
  for (let index = 0; index < product.data.length; index++) {
    const element = product.data[index];
    if (req.params.id == element.id) {
      dataProduct.push(element);
      console.log(element);
    }
  }
  res.status(200).json({
    data: dataProduct,
    statusCode: 200,
    message: "Get Product Successfully",
  });
  console.log(req.params.id, "= params.id ");
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