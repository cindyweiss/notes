'use strict';

const notes = {};

notes.fetch = function (opts) {
  if (opts) {
    console.log(`Action ${opts.action}`);
    console.log(`Payload ${opts.payload}`);
  }
};


module.exports = notes;

