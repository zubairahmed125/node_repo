const fs = require('fs');
var note = fs.readFileSync('note-command.json');
var readNote = JSON.parse(note);
console.log(readNote);
var removenote = (title,body)=>{

var noteFilter = readNote.filter((ty)=>ty.title !== title);
console.log(noteFilter);
fs.writeFileSync('note-command.json', JSON.stringify(noteFilter));

}
module.exports = {
  removenote
}
