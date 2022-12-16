const express = require("express");
const app = express();
const path = require('path')
const router = require('./rout/myRouter')


app.use(router);
app.use(express.static(path.join(__dirname,'../../train1')));
app.listen(3000, () => {
  console.log("http://localhost:3000");
});
