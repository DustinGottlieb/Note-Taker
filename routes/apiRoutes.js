const fs = require('fs');

module.exports = (app) => {


    app.get('/api/notes', (req, res) => {
        fs.ReadFile()
    });

    app.post('/api/notes', (req, res) => {
        const newNote = req.body;

        console.log(newNote);

        notesData.push(newNote);

        res.json(newNote);
    })
}