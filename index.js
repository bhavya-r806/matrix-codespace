// Simple Node.js App
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('User Service Running');
});

server.listen(3000, () => console.log('Listening on port 3000'));
