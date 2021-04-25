const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const notesData = require('../db/db.json');



module.exports = (app) => {


    app.get('/api/notes', (req, res) => {
        fs.ReadFile()
    });

    // API POST Requests
    app.post('/api/notes', (req, res) => {
        const newNote = req.body;

        console.log(newNote);

        notesData.push(newNote);

        res.json(newNote);
    })
}