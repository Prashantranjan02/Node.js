const chalk = require('chalk');
// chalk module is used to color the font or text written
// -> we can change the font color
// -> we can change the backgrond color
// -> we can change the font style like : italic bold and all.
//  we just have to import 'chalk' module and then..
// use it using 'chalk.property_name(text) '
console.log(chalk.blue.italic.inverse("Hello Sahil Tiwari !!"));
console.log(chalk.green.underline.bold.inverse("Success"))

