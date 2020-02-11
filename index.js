'use strict';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const options = new Input;
options.valid() ? Notes.fetch(options) : help();

function help() {
  console.log('well that did not t work!');
  process.exit();
}


