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


var headers = {
   
    'Content-Type':     'application/x-www-form-urlencoded',
    'apikey':'7VMBvtjVIM14qsMPORv0jS5y1Uq260HG'
    
   


}
 
// Configure the request
var options = {
  //url: "http://sv2lxfasgwdi01.corp.equinix.com:9009/auth/login",
    url: "http://sv2lxfasgwdi01.corp.equinix.com:9009/auth/login",

    //url: "http://jobscheduler.corp.equinix.com/j_security_check",
   method: "POST",
   //followAllRedirects: true,
   // jar:true,
    headers: headers,
     //proxy: 'http://127.0.0.1:8888',
  form: {'j_username': 'ranantharaman', 'j_password': 'Equinix2016'}
}
 
// Start the request
request(options, function (error, response, body) {
  console.log(response);

request({
  url: "http://sv2lxfasgwdi01.corp.equinix.com:9009/cad/v1/job/a2e88d7a-a81b-48d2-ad27-86b1ec7183f6/executions",
  method: "POST",
  headers : {"apikey":"7VMBvtjVIM14qsMPORv0jS5y1Uq260HG"},
  jar:true
  
        
}, function(error, response, body) {
  console.log(body);
      });

});

var header = "[JSESSIONID=1gt4mnnfdcvev12vgwlg080cyn;Path=/]"; 
var a = header.substring(1, header.length-1).split(',');

//console.log("value " + header.substring(1, header.length-1));

for (var i=0, L = a.length, oneHeader; i<L; i++) {
  oneHeader = a[i].split(';')[0].trim();
  console.log("Length" +  a.length);
}


/*request({
  uri: "http://diapi.equinix.com/cad/jira/login",
  method: "POST",
 /* json: {
                "username": "gsebuild",
                "password": "welcome1"
        },
        headers: {
                "Content-Type": "application/json"
        }
}, function(error, response, body) {
	console.log(response.session.name);

	var name = body.session;
	var value = body.session;
	
*/




  //});




var server = app.listen(8080, function () {
   console.log('http://%s:%s', server.address().address, server.address().port);
});