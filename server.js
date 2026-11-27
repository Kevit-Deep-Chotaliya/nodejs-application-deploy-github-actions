const http = require('http');

const PORT = 8000;

const server = http.createServer((req, res) => {
    res.end("Hello World");
});

server.listen(PORT, 'localhost', () => {
    const { address, port } = server.address();
    console.log(`Server is running at : http://${address}:${port}`);
});

const url = new URL('https://www.codecademy.com/courses/learn-node-js/lessons/setting-up-a-server-with-http/exercises/the-url-module')

console.log(url.hostname);
console.log(url.pathname);
console.log(url.searchParams);



