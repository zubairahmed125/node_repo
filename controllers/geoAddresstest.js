const request = require('request');

const geocode = (uri,callback) =>{

request({
uri:`https://maps.googleapis.com/maps/api/geocode/json?&address=${uri}`,
json:true
},(error,response,body) =>{
if (!error & body.status === 'OK') {
callback(undefined, {
  address:   body.results[0].formatted_address,
  latitude:   body.results[0].geometry.location.lat,
  longitude: body.results[0].geometry.location.lng
});
}
});
}
module.exports = {
  geocode
}
