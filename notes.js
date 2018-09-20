const fs = require("fs");

var fetchNotes = () => {
  try {
    notes = fs.readFileSync("notes.json");
    return JSON.parse(notes);
  } catch (e) {
    console.log("something went wrong in notes.json reading");
    return [];
  }
};
var saveNotes = notes => {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};
var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  var isDuplicate = notes.filter(note => note.title === title);
  if (isDuplicate.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAllNotes = () => {
  return fetchNotes();
};
var removeNote = title => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter(note => note.title !== title);
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;
};
var getNote = title => {
  var notes = fetchNotes();
  var fetchedNote = notes.filter(note => note.title === title);
  return fetchedNote[0];
};

module.exports = {
  addNote,
  getAllNotes,
  removeNote,
  getNote
};
