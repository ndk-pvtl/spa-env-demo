const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/name', (req, res) => {
    res.send({
        user: process.env.REACT_APP_USER
    });
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



console.log('Starting Webserver');

app.listen(process.env.PORT || 3000);
