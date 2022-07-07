const path = require('path');
const app = require('express').Router();


module.exports = (app) => {
//GET /notes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});


};


