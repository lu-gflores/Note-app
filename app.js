const chalk = require('chalk')
const notes = require('./notes')

const command = process.argv[2]

//argv is an array with all of the arguments provided by the user
console.log(process.argv)

if (command === 'add') {
    console.log('Adding Note')
} else if (command === 'remove') {
    console.log('Removing Note')
}
