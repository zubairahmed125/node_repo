const fs = require('fs');
var fetchNotes = ()=>{
  try {
  var readFile = fs.readFileSync('node-data.json');
    return JSON.parse(readFile);
  } catch (e) {
    return[];
  }
}
var WriteNotes = (notes)=>{
  fs.writeFileSync('node-data.json', JSON.stringify(notes));
}
var addNote = (title,body)=>{
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  notes.push(note);
  WriteNotes(notes);
}

//Remove notes
var remove = (title,body)=>{
var mynotes = fetchNotes();
var filterNotes = mynotes.filter((note)=>note.title !== title);
WriteNotes(filterNotes);
}

module.exports = {
  addNote,
  remove
}
