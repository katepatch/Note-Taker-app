const fs = require('fs');
const path = require('path');

function newDb(id, notesArray) {
    const deletedNote = id;
    for (let i = 0; i < notesArray.length; i++) {
        if (deletedNote === notesArray[i].id) {
            notesArray.splice(i, 1);
            fs.writeFileSync(
                path.join(__dirname, '../db/db.json'),
                JSON.stringify({notes: notesArray}, null, 2), err => {
                    if (err) {
                        throw err;
                    }
                });
        }
    }
}

function newNote(body, notesArray) {
    const userNote = body
    console.log("here")
    notesArray.push(userNote);
    console.log(notesArray);
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify({notes: notesArray}, null, 2)
        
    );
    return userNote;
}

module.exports = {
    newDb,
    newNote,
};