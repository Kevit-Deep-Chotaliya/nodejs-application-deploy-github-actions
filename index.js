// const { createServer } = require('node:http');
// const hostname = '127.0.0.2';
// const port = 3000;
// const server = createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World');
// });
// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });


const fs = require("fs");
// const path = require("path");
// const { Buffer } = require("buffer");

// const filePath = path.join(__dirname, "demo.js");

// fs.readFile(filePath, "utf8", (err, data) => {
//     console.log(data);
// });

// const buffer = Buffer.alloc(12, 'Hello World')
// console.log(buffer.toString())

let readDataCallback = (err, data) => {
    if (err) {
        console.log(`Something went wrong: ${err}`);
    } else {
        console.log(`Provided file contained: ${data}`);
    }
};

fs.readFile('./demo.js', 'utf-8', readDataCallback)

console.log(Boolean(0))