//create web server
const express = require('express');
const app = express();
const port = 3000;

//middleware to parse JSON bodies
app.use(express.json());

//in-memory storage for comments
let comments = [];

//endpoint to get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

//endpoint to add a new comment
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.status(201).json(comment);
});