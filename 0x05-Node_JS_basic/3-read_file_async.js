const fs = require('fs');
const path = require('path');

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

      for (const student of students) {
        const [firstname, lastname, age, field] = student.map((entry) => entry.trim());
        if (firstname && lastname && age && field) {
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        }
      }

      let result = `Number of students: ${lines.length}`;
      for (const [field, firstnames] of Object.entries(fields)) {
        result += `Number of students in ${field}: ${firstnames.length}. List: ${firstnames.join(', ')}`;
      }

      resolve(result.trim());
    });
  });
}

module.exports = countStudents;