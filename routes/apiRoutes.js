const {notes} = require('../db/db.json')
const { v4: uuidv4 } = require('uuid');
const { newNote, newDb } = require('../lib/notes');
const router = require('express').Router();

// GET Route for retrieving all the notes = /api/notes/
router.get('/notes', (req, res) => {
    let input = notes;
    res.json(input);
});;

//POST api/notes
router.post('/notes', (req, res) => {
    req.body.id = uuidv4();
    const userNote = newNote(req.body, notes);
    res.json(userNote);
});

//DELETE api/notes
router.delete("/notes/:id", (req, res) => {
    const params = req.params.id
    newDb(params, notes);
    res.redirect('');
});

module.exports = router;


