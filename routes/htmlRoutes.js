const path = require('path');
const router = require('express').Router();



//GET /notes
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../notes.html'));
});

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});



module.exports = router;

