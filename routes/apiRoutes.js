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



//GET api/notes
// app.get('/api/notes', (req, res) => {
//     res.sendFile(path.join(__dirname, '../db/db.json'));
// });

//POST api/notes
app.post('/notes', (req, res) => {
    req.body.id = uuidv4();
    const newUserNote = newNote(req.body, notes);
    res.json(newUserNote);
    // let db = fs.readFileSync('db/db.json');
    // db = JSON.parse(db);
    // res.json(db);

    // let newNote = {
    //     title: req.body.title,
    //     text: req.body.text,
    //     id: uuid(),
    // };
    // db.push(newNote);
    // fs.writeFileSync('db/db.json', JSON.stringify(db));
});

//DELETE api/notes
app.delete("/notes/:id", (req, res) => {
    const params = req.params.id
    newDb(params, notes);
    res.redirect('');
});

module.exports = app;


