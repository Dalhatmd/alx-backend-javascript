const http = require('http');

const port = 1245;

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
});

module.exports = app;

if (require.main === module) {
  app.listen(port);
}
