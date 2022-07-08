const {notes} = require('../db/db.json')
const { v4: uuidv4 } = require('uuid');
const { newNote, newDb } = require('../lib/notes');
const router = require('express').Router();

// GET Route for retrieving all the notes = /api/notes/
router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});;

//POST api/notes
router.post('/api/notes', (req, res) => {
    let db = fs.readFileSync('db/db.json');
    db = JSON.parse(db);
    res.json(db);
    let userNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };
    db.push(userNote);
    fs.writeFileSync('db/db.json', JSON.stringify(db));
    res.json(db);
});

//DELETE api/notes
router.delete("/notes/:id", (req, res) => {
    const params = req.params.id
    newDb(params, notes);
    res.redirect('');
});

module.exports = router;


// req.body.id = uuidv4();
//     const userNote = newNote(req.body, notes);
//     res.json(userNote);