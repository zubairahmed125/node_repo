var fs = require('fs');
var readCommand = (title,body)=>{

var notes = [];
var note = {
  title,
  body
}
notes.push(note);
fs.writeFileSync('note-command.json', JSON.stringify(notes));
var readFile = fs.readFileSync('note-command.json', 'utf8');
console.log(JSON.parse(readFile));
console.log(readFile);
}
module.exports = {
  readCommand
}
