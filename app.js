const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes.js");
const titleOptions = {
  describe: "Title of note",
  demand: true,
  alias: "t"
};
const bodyOptions = {
  describe: "Body of note",
  demand: true,
  alias: "b"
};
const argv = yargs
  .command("add", "Add a new note", {
    title: titleOptions,
    body: bodyOptions
  })
  .command("list", "List all notes")
  .command("read", "Read the note", {
    title: titleOptions
  })
  .command("remove", "Remove the note", {
    title: titleOptions
  })
  .help().argv;

const command = argv._[0];

if (command === "add") {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log(`note created successfully ${argv.title}`);
  } else {
    console.log(`duplicate note exist with title ${argv.title}`);
  }
} else if (command === "remove") {
  var isNoteRemoved = notes.removeNote(argv.title);
  if (isNoteRemoved) {
    console.log(`note removed successfully ${argv.title}`);
  } else {
    console.log(`note ${argv.title} not found`);
  }
} else if (command === "list") {
  var notesList = notes.getAllNotes();
  notesList.forEach(note => {
    console.log(`Title: ${note.title}  Body: ${note.body}`);
  });
} else if (command === "read") {
  var fetchedNote = notes.getNote(argv.title);
  if (fetchedNote) {
    console.log(
      `note found with title ${fetchedNote.title} and body ${fetchedNote.body}`
    );
  } else {
    console.log(`note not found with title ${argv.title}`);
  }
} else {
  console.log("inside else");
}
