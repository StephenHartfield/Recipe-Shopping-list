const http = require('http');
const app = require('./app');
const path = require('path');
const express = require('express');

const port = process.env.PORT || 4000;

// if (process.env.NODE_ENV === 'production') {
    console.log('port', port)
    console.log('process.env.NODE_ENV', process.env.NODE_ENV)
    app.use(express.static(path.resolve(__dirname, 'client', 'build')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
// }

const server = http.createServer(app);

server.listen(port);