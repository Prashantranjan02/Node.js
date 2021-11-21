const validator = require('validator');
const chalk = require('chalk');

// -> here firstly we are checking wheather email exists or not!
const result = validator.isEmail('vishnupsingh523@gmail.com');

console.log(result? chalk.green.inverse(result) : chalk.red.inverse(result));