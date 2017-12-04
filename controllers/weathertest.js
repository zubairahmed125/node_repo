const yargs = require('yargs');
const geoAddtest = require('./geoAddresstest');

const argv = yargs.options({
  a: {
    describe:'Please enter address properly',
    demand:true,
    string:true,
    alias:'address'
  }
}).help().argv;
var uri = encodeURI(argv.a);
geoAddtest.geocode(uri,(error,results) =>{
console.log(JSON.stringify(results,undefined,2));
});
