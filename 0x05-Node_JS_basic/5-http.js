const http = require('http');
const countStudents = require('./3-read_file_async')

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents('database.csv')
      .then((data) => {
        res.end(data);
      })
    .catch((error) => {
      res.end(error.message);
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Invalid request');
  }
})

module.exports = app;

if (require.main === module) {
    app.listen(1245);
}