const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

notes.get('/api/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.post('/spi/notes', (req, res) => {
    console.log(req.body);

    const { noteTitle, noteText } = req.body;

    if (req.body) {
        const newNote = {
            noteTitle,
            noteText,
        };

        readAndAppend(newNote, './db/db.json');
        res.json(`Note Added`);
    } else {
        res.error(`Could not add note`);
    }
});

module.exports = notes;