const yargs = require('yargs');

const argv = yargs.options({
  a:{
    alias: 'address',
    describe:'Please enter the address',
    demand:true,
    string:true
  }
}).help().argv;
