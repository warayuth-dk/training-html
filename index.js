const express = require('express');
const app = express();
const cors = require('cors');

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

 
// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});