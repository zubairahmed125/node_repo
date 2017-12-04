const yargs = require('yargs');
const geocode = require('./geoAddress');
const geoweatheradd = require('./weathergeoadd');
const app = require('express');

const callback = app();

callback.set('view engine', 'ejs');

const argv = yargs.options({
  a:{
    demand:true,
    alias: 'address',
    describe:'Please enter the address',
    string:true

  }
}).help().argv;

var uri = encodeURIComponent(argv.a);
console.log(uri);
geocode.geocode(uri,(error,results) =>{
  if(error){
    console.log(error);
  }else {
    console.log(JSON.stringify(results,undefined,2));
    //console.log(JSON.stringify(results.Latitude,undefined,2));
    geoweatheradd.geoweatheradd(results.Latitude,results.Longitude,(error,wresults)=>{
      if(error){
        console.log(error);
      }else{
        console.log(JSON.stringify(wresults,undefined,2));
      }
      callback.get('/callback', function(req,res){
        res.render('callback', {data:results, wdata:wresults});
    });
    });
  }
  callback.listen(3000);
  console.log('listening');
});
