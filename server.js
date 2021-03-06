const express = require('express');
const path = require('path');
const fs = require('fs')
const database = require('./db/db.json')
const uniqid = require('uniqid');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static('public'))

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));
app.get('/api/notes', (req, res) => {
    res.json(database)
})

app.get('/api/notes:id', (req, res) => {
    const noteId = req.params.id;
    for (let i = 0; i < database.length; i++) {
        if (database[i].id === noteId) {
            res.json(database[i])
        }
    }
})

app.post('/api/notes', (req, res) => {
    if (req.body) {
        const newNote = req.body;
        newNote.id = uniqid();
        database.push(newNote);
        res.json(newNote);
    } else {
        res.status(404).send()
    }

});

app.delete('/api/notes/:id', (req, res) => {
    const noteId = req.params.id;
    var noteIndex
    for (let i = 0; i < database.length; i++) {
        if (database[i].id === noteId) {
            noteIndex = i
        }
    }
    database.splice(noteIndex, 1);
    res.status(204).send()
})

app.get('*', (req, res) => res.redirect('/index.html'));


app.listen(PORT, () => {
    console.log(`App is listening on PORT: http://localhost:${PORT}`)
});