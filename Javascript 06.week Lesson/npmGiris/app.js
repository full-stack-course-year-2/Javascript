
// const camelCase = require('camelcase');

// console.log(camelCase('node-js'));

// console.log(camelCase('Foo-Bar'));

//---------------------------------------------------------------------

// const generator = require('generate-password');

// const password = generator.generate({
// 	length: 20,
// 	numbers: true,
//     symbols:true,
//     uppercase: false
// });

// console.log(password);

//---------------------------------------------------------------------

// import chalk from 'chalk';

// console.log(chalk.green('Hello world!'));

//---------------------------------------------------------------------

// const slugify = require('slugify')

// console.log(slugify('some string')); // some-string

// console.log(slugify('some string', '*'));

//---------------------------------------------------------------------

const icons = require('ph-terminal-icons');

console.log(icons.error, 'error')
console.log(icons.info, 'info')
console.log(icons.success, 'success')
console.log(icons.warning, 'warning')