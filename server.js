const express = require('express');
const router = require('express').Router();
const path = require('path');
const { v4: uuidv4 } = require('uuid');
//const api = require('./routes/index.js');
const PORT = process.env.PORT || 3001;
const app = express();
const fs = require('fs');


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use('/api', api);

router.get('/api/notes', (req, res) => {
  console.log("here")
  const notes = require('./db/db.json')
  
  res.json(notes);
});;

//POST api/notes
router.post('/api/notes', (req, res) => {
  const notes = require('./db/db.json')
  
  
  
  let userNote = {
      title: req.body.title,
      text: req.body.text,
      id: uuidv4(),
  };
  console.log("usernotes")
  notes.push(userNote);
  console.log("notes")
  fs.writeFileSync('db/db.json', JSON.stringify(notes));
  res.json(notes);
});

//DELETE api/notes
router.delete("/api/note_:id", (req, res) => {
  const noteToDelete = req.params.id;
  fs.readFile(__dirname + "/db/db.json", (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }
    try {
        let json = JSON.parse(data);
    } catch (e) {
      console.log (err);
      res.sendStatus(500);
      return;
    }
    for (let i = 0; i < json.length; i++) {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      }
      res.send("Note Deleted");
    }
  })
  //   .then((data) => JSON.parse(data))
  //   .then((json) => {
  //   const result = json.filter((note) => note.note_id !== noteId);
  //   writeToFile('./db/db.json', result);
  //   res.json(`note ${noteID} has been deleted`);
  // })

  
  
  
  // const notes = require('./db/db.json')
  // const id = req.params.id
  // const result = json.filter((note) => notes.notes_id !== id);
  //newDb(params, notes);
  //res.redirect('');
});

app.use(router);
app.use(express.static('public'));

// GET Route for homepage
// app.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/index.html'))
// );

// // GET Route for feedback page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// app.get('/', (req, res) => {
//     readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
// });

// Wildcard route to direct users to a 404 page
// app.get('*', (req, res) =>
//   res.sendFile(path.join(__dirname, 'public/404.html'))
// );
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} :rocket:`)
);

