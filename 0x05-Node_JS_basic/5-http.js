const http = require('http');
const fs = require('fs');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== ''); // Remove empty lines
      const headers = lines.shift(); // Remove the header line

      if (!headers) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const students = lines.map((line) => line.split(','));
      const fields = {};
      let totalStudents = 0;

      for (const student of students) {
        const [firstname, lastname, age, field] = student.map((entry) => entry.trim());
        if (firstname && lastname && age && field) {
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
          totalStudents += 1;
        }
      }

      let result = `Number of students: ${totalStudents}\n`;
      for (const [field, firstnames] of Object.entries(fields)) {
        result += `Number of students in ${field}: ${firstnames.length}. List: ${firstnames.join(', ')}\n`;
      }

      resolve(result.trim());
    });
  });
}

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');
    countStudents(process.argv[2])
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
});

module.exports = app;

if (require.main === module) {
  app.listen(1245);
}
