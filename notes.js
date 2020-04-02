const fs = require('fs')//Require is for the file system 
const chalk  = require('chalk')


const addNote= (title , body )=>{ //add note function decalaration
const notes =  loadnotes()//calling load notes function to the notes variable
const duplciateNote = notes.find((note)=>notes.title===title)
if (!duplciateNote){ //checking the duplciate notes if not available then pushing the notes to an array 
    notes.push({
        title:title,
        body:body
    }) 
    savenotes(notes)//saving notes function using notes as parameter
    console.log(chalk.green.inverse("New Note Added"))
}
else{
    console.log(chalk.red.inverse('Note Title Taken'))//if it has found duplicate notes then it will give this message 
}

}

const savenotes = function(notes){//save notes function using notes as a parameter
const dataJSON=JSON.stringify(notes)//converting the obj to string
fs.writeFileSync('notes.json',dataJSON) //writing the file to notes.json file
}

const loadnotes = function(){
    try{
        const databuffer = fs.readFileSync('notes.json')//Reading the file from notes.json and storing it in databuffer variable 
        const dataJSON = databuffer.toString() // Converting the data buffer to string using to string function
        return JSON.parse(dataJSON)// Parsing the string to obejct 
    }
    catch (e){
        return []
    }
    

}

const rmnotes = function(title){//remove notes function with titl eas input parameter in that function
const notes = loadnotes() //loading notes function
const notestokeep = notes.filter(function(note){ //filtering the notes array  and stroing it in notestokeep variable
return note.title !== title//returning the boolean value of true or falswe based on that condition
})
if (notes.length>notestokeep.length){ //if notes is greater than the filter array of notestokeep , then the notes is removed sucessfully 
    console.log(chalk.green.inverse('Note Removed Successfully'))
    savenotes(notestokeep)
}
else{
    console.log(chalk.red.inverse('No Note Found in the list'))
}

}
//Listing NOtes
const listNotes = ()=>{
    const notes = loadnotes()

    console.log(chalk.inverse('\nYour notes'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}
//reading notes function
const readnotes = (title)=>{
    const notes = loadnotes()
    const note = notes.find((note)=>note.title===title)
    if (note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }else{
        console.log(chalk.red.inverse('Note NOt Found'))
    }
}

//exporting the getnotes and addnotes to the app.js\
module.exports = 
{
   
    addNote:addNote,
    rmnotes:rmnotes,
    listNotes:listNotes,
    readnotes:readnotes
} 