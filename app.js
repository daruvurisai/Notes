const notes = require('./notes')
const yargs = require('yargs')
const chalk = require('chalk')

// Yargs Version 1.0.0
yargs.version('1.0.0')
//Adding Notes , Removing Notes , Read Notes , Listing Notes

//Creating add command 
yargs.command({
    command:'add',
    describe:'Add a New Note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Body of the Note',
            demandOption:true,
            type:'string'
            
        },
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})
//Creating the Remove command 
yargs.command({
    command:'remove',
    describe:'Removeing the Note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },
    },
    handler(argv){
        notes.rmnotes(argv.title)
    }
})
//Creating the Read Command
yargs.command({
    command:'read',
    describe:'Reading the Note ',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readnotes(argv.title)
    }
})
//Creating the List Command 
yargs.command({
    command:'list',
    describe:'Listing all Notes',
    handler(){
       notes.listNotes()
    }
})

yargs.parse()