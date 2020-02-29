const yargs = require('yargs')
const notes = require('./notes')

yargs.command({
    command: 'add',
    describe: 'This command adds notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNotes(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'This command removes notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.removeNotes(argv.title)
    }
})

yargs.command({
    command: 'read',
    describe: 'This command reads notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.readNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'This command lists notes',
    handler: () => {
        notes.listNotes()
    }
})

yargs.parse()


