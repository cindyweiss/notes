'use strict';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const options = new Input();
// options.valid() ? Notes.fetch(options) : help();
const notes = new Notes(input);

if (input.valid()) {
  Notes.execute();
} else {
  help();
};


function help() {
  console.log('well that did not not work!');
  process.exit();
}
