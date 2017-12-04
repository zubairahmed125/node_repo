const express = require('express');
const yargs = require('yargs');
const todocontroller = require('./controllers/todocontroller');
const commandcontroller = require('./controllers/commandcontroller');
const yargscust = require('./controllers/yargscust');
const readCommand = require('./controllers/readcommand');
const removenote = require('./controllers/removenote');

const app = express();

var argv = yargs.command('add','add a note',{
  title:{
    describe:'Title of Note',
    demand:true,
  }
}).help().argv;

app.set('view engine', 'ejs');
app.use(express.static('./'));
todocontroller(app);
commandcontroller(app);
//yargscust.addNote(argv.title, argv.body);
//yargscust.remove(argv.title, argv.body);
//removenote.removenote(argv.title,argv.body);
readCommand.readCommand(argv.title, argv.body);

app.listen(3000);
