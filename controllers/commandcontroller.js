const command = process.argv[2];

module.exports = function(app){

app.get('/command', function(req,res){
  res.render('command', {data:command});
});


}
