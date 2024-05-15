// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the fs module to read the file and send it to the client.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('./comments.html', (err, data) => {
        if (err) {
        res.writeHead(404);
        res.end('Not Found');
        } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
        }
    });
    });
