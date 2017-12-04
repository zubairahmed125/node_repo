const yargs = require('yargs');
const axios = require('axios');
const argv = yargs.options({
  a: {
    describe:'Please enter address properly',
    demand:true,
    string:true,
    alias:'address'
  }
}).help().argv;
var uri = encodeURI(argv.a);
var luri = `https://maps.googleapis.com/maps/api/geocode/json?&address=${uri}`;

axios.get(luri).then((response) =>{
  var lati = response.data.results[0].geometry.location.lat;
  var luri = response.data.results[0].geometry.location.lng;

  var wuri = `https://api.darksky.net/forecast/9f30f1738f59236e8c4e3cebaf0cc819/${luri},${lati}`;
  console.log(response.data.results[0].formatted_address);
  return axios.get(wuri);
}).then((response) =>{
  console.log(response.data.currently.temperature);
}).catch((e) =>{
  console.log(e);
});
