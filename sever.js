var express = require('express');
var sever = express();
var port = 3000;
var chalk = require('chalk');
sever.get("/",(req,res) => {

    res.send('hello dukdik');
})

sever.listen(port, ()=>{

    console.log("Listing on port %d",port);
})
