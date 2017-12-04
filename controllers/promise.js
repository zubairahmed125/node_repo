const  request = require('request');
var geocode = (address) =>{

return new Promise((resolve,reject) =>{

  request({
  uri:`https://maps.googleapis.com/maps/api/geocode/json?&address=${address}`,
  json:true
  },(error,response,body) =>{
  if (!error & body.status === 'OK') {
  resolve( {
    address:   body.results[0].formatted_address,
    latitude:   body.results[0].geometry.location.lat,
    longitude: body.results[0].geometry.location.lng
  });
}else{
  reject(error);
}
  });

});

};

geocode('4000').then((res) =>{
console.log(JSON.stringify(res, undefined, 2));
}, (error) =>{
  console.log(JSON.stringify(error));
});
