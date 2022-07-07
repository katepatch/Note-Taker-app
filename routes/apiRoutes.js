const path = require('path');
const fs = require('fs');
const uuid = require('../helpers/uuid');
//const { append } = require('vary');
const app = require('express').Router();

// GET Route for retrieving all the notes = /api/notes/
app.get('/', (req, res) => {
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


