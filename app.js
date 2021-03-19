const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

//customize yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Write in the note\'s body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing note')
    }
})

//list command
yargs.command({
    command: 'list',
    describe: 'List all Notes avaliable',
    handler: function () {
        console.log('Listing out all notes')
    }
})

//read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading note...')
    }
})

//argv is an array with all of the arguments provided by the user
//console.log(process.argv)
yargs.parse()
//console.log(yargs.argv)


