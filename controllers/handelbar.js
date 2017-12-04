const express = require('express');
const hbs = require ('hbs');
const app = express();

app.set('view engine', 'hbs');
hbs.registerPartials('./views/partials');
hbs.registerHelper('Date', () =>{
  return new Date().getFullYear();
});

// app.use((req,res,next) =>{
//   res.render('Maintainence.hbs');
//
// });

app.get('/home', (req, res) =>{
  res.render('home.hbs', {
    Greet : 'Asalaamualeykum',
    footer: 'Copyright'
  });
});

app.listen(3000, () =>{
  console.log('Listening to port 3000');
});
