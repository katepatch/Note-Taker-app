// const notes = require('express').Router();
// const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
// const uuid = require('../helpers/uuid');

// notes.get('/api/notes', (req, res) => {
//     readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
// });

// notes.post('/spi/notes', (req, res) => {
//     console.log(req.body);

//     const { noteTitle, noteText } = req.body;

//     if (req.body) {
//         const newNote = {
//             noteTitle,
//             noteText,
//         };

//         readAndAppend(newNote, './db/db.json');
//         res.json(`Note Added`);
//     } else {
//         res.error(`Could not add note`);
//     }
// });

// module.exports = notes;

const path = require('path');
const fs = require('fs');
const uuid = require('../helpers/uuid');
const { append } = require('vary');
const notes = require('express').Router();

// GET Route for retrieving all the notes = /api/notes/
notes.get('/', (req, res) => {
  readFromFile('./db/tips.json').then((data) => res.json(JSON.parse(data)));
});



//GET api/notes
// app.get('/api/notes', (req, res) => {
//     res.sendFile(path.join(__dirname, '../db/db.json'));
// });

//POST api/notes
app.post('/api/notes', (req, res) => {
    let db = fs.readFileSync('db/db.json');
    db = JSON.parse(db);
    res.json(db);

    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuid(),
    };
    db.push(newNote);
    fs.writeFileSync('db/db.json', JSON.stringify(db));
});

//DELETE api/notes

module.exports = app;


