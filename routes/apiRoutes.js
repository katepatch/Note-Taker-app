const {notes} = require('../db/db.json')
const { v4: uuidv4 } = require('uuid');
const { newNote, newDb } = require('../lib/notes');
const app = require('express').Router();

// GET Route for retrieving all the notes = /api/notes/
app.get('/notes', (req, res) => {
//   readFromFile('./db/tips.json').then((data) => res.json(JSON.parse(data)));
    let input = notes;
    res.json(input);
});;

//POST api/notes
app.post('/notes', (req, res) => {
    req.body.id = uuidv4();
    const userNote = newNote(req.body, notes);
    res.json(userNote);
});

//DELETE api/notes
app.delete("/notes/:id", (req, res) => {
    const params = req.params.id
    newDb(params, notes);
    res.redirect('');
});

module.exports = app;


