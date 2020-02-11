'use strict';


const minimist = require('minimist');

const rules = {
  action: { required: true },
  payload: { required: true },
};

function Input() {
  const args = minimist(process.argv.slice(2));
  this.action = this.getAction(args.a);
  this.payload = this.getPayload(args.p);
}

Input.prototype.getAction = function (action = '') {
  // let validAction = /a|add/i;
  return (action === 'a') | (action === 'add') ? 'You are not using valid commands.' : action;
};

Input.prototype.getPayload = function (payload = '') {
  return (payload === '') ? 'Please add your notes.' : payload;
};

Input.prototype.valid = function () {
  return Object.keys(rules).every((option) => {
    return rules[option].required ? !!this[option] : true;
  });
};

module.exports = Input;

