var express = require('express'),
    app = express();

 var request = require("request");


// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});


app.post('/api',function(req,res){
  res.send("post param");
  //console.log(req.body);
});


