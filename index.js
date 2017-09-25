var request  =  require("request");
var yargs = require("yargs").argv;
var argv  =  require("argv")
//var searchword = argv.q|| " "
var searchword = 'hello'
//implementing wikipedia openSearch api
var url ='https://en.wikipedia.org/w/api.php?action=opensearch&search="+ ${Michael Jackson}+ " &format=json';
request(url,function(err,response,body){
     if (err){
         console.log(err);
     }
      else {
          var resp = JSON.parse(body);
          for (var i =0;i < resp[1].length;i++){
          var data = resp[2][i]
          }
         console.log("resp: " , data )
      } 
 })
 
  
 