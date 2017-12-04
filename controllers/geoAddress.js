const request = require('request');
var geocode = (uri,callback) =>{

  request({
    uri: `https://maps.googleapis.com/maps/api/geocode/json?&address=${uri}`,
    json:true
  }, (error,response,body) =>{
    if(error){
      callback('Unbale to connect to Google Server');
    }else if (body.status === 'ZERO_RESULTS' || body.status === 'OVER_QUERY_LIMIT') {
      callback('No Address found');
    }else if (body.status === 'OK') {
      callback(undefined,{
        address: `Address : ${body.results[0].formatted_address}`,
        Latitude:  body.results[0].geometry.location.lat,
        Longitude: body.results[0].geometry.location.lng
      });
    }
  });
}
module.exports = {
  geocode
}
