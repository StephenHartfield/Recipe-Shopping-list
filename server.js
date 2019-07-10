const http = require('http');
const app = require('./app');
const path = require('path');

const port = process.env.PORT || 4000;

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const server = http.createServer(app);

server.listen(port);