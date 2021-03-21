const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your Notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    //checks to see if there is a duplicate title in the array. If there is, add it to the duplicate array
    const duplicateNotes = notes.filter(note => note.title === title)

    //if there is no duplicate, add it to the notes array
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New Note added!'))
    } else {
        console.log(chalk.red.inverse('Note title already exists!'))
    }
}

const removeNote = (title) => {
    //loading notes
    const notes = loadNotes()
    // removes any note title match in the array and saves it in a new array
    const keptNotes = notes.filter(note => note.title !== title)

    if (notes.length > keptNotes.length) {
        console.log(chalk.green.inverse('Note removed'))
    } else {
        console.log(chalk.red.inverse('No Note Found'))
    }

    saveNotes(keptNotes)
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.cyan.inverse('Your Notes: '))
    notes.forEach(note => {
        console.log(note.title)
    });
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json').toString()
        return JSON.parse(dataBuffer)
    } catch (e) {
        //if there is no data/notes.json file, return an empty array
        return []
    }
}

module.exports = {
    getNotes,
    addNote,
    removeNote,
    listNotes
}