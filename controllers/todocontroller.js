const _ = require('lodash');

var filterarray = ['Zubi', 1,2,1,1,2,3,4,'Zubi'];

var unique = _.uniq(filterarray);

module.exports = function(app){
  app.get('/index', function(req,res){
    res.render('index' , {data:unique});
  });
}
