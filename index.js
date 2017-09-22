var request  =  require("request");
var yargs = require("yargs").argv;
 var url = "google.com";
 request(url,function(err,response,body){
     if (err){
         console.log(err)
     }
     else {
         console.log("body: " , body )
     }
 })