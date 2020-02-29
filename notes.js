const fs = require('fs')
const chalk = require('chalk')

const addNotes = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green('New note added!'))
    } else {
        console.log(chalk.red('Note title taken!'))
    }

}

const removeNotes = (title) => {
    const notes = loadNotes()
    
    notesToKeep = notes.filter((note) => note.title !== title)
    saveNotes(notesToKeep)

    if (notes.length > notesToKeep.length){
        console.log(chalk.green('A note is removed!'))
    } else{
        console.log(chalk.red('Note not found!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blueBright('Your notes...'))
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const data = notes.find((note) => note.title === title)
    
    if (data){
        console.log(chalk.blue(data.title))
        console.log(chalk.magenta(data.body))
    } else{
        console.log(chalk.red('Note not found!'))
    }
}

const loadNotes = () => {
    try{
        data = JSON.parse(fs.readFileSync('notes.json').toString())
        return data
    }
    catch (err) {
        return []
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json',JSON.stringify(notes))
}


module.exports = {
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote: readNote
}