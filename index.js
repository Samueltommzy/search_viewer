var request  =  require("request");
var argv  =  require("argv")
var search_engine =process.argv[2] || "google"
var searchword = process.argv[3] || " " 
console.log('searchword is  ' + searchword)
console.log('search engine is ' + search_engine)
var url = ''
//implementing wikipedia openSearch api
//var url ='https://en.wikipedia.org/w/api.php?action=opensearch&search=" + ${searchword}+ " &format=json';
if(search_engine == "wiki"){
    try{
 url = `https://en.wikipedia.org/w/api.php?action=opensearch&search="+ ${searchword} +"&format=json`
request(url,function(err,response,body){
     if (err){
         console.log(err);
     }
      else {
          var resp = JSON.parse(body);
          for (var i =0;i < resp[1].length;i++){
           console.log(resp)   
          var data = `You searched for ${resp[1][i]} and wiki's response is ${resp[2][i]} Follow this link to read more — ${resp[3][i]}` + '\n';
          }
         console.log("resp: " , data )
      } 
 })
}
catch(err){
    console.log(err)
}
}
if(search_engine == 'google'){
     url = ''
 }
 
  
 