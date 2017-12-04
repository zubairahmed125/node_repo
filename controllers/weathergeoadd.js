const request = require('request');

var geoweatheradd = (luri,lati,callback)=>{
var uri = luri + lati;
console.log(luri);
request({
  uri:`https://api.darksky.net/forecast/9f30f1738f59236e8c4e3cebaf0cc819/${luri},${lati}`,
  json:true
},(error,response,body)=>{
  if (!error & response.statusCode === 200) {
    callback(undefined,{
      temperature: `temperature : ${body.currently.temperature}`,
    });
  }else {
    console.log('Error in weathetr');
  }
});

}

module.exports = {
  geoweatheradd
}
