const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  const inFile = fs.readFileSync(path, 'utf8');
  const lines = inFile.split('\n');
  const fieldName = {};
  let students = -1;
  for (const line of lines) {
    if (line.trim() !== '') {
      const columns = line.split(',');
      const field = columns[3];
      const firstname = columns[0];
      if (students >= 0) {
        if (!Object.hasOwnProperty.call(fieldName, field)) {
          fieldName[field] = [];
        }
        fieldName[field] = [...fieldName[field], firstname];
      }
      students += 1;
    }
  }
  console.log(`Number of students: ${students}`);
  for (const key in fieldName) {
    if (Object.hasOwnProperty.call(fieldName, key)) {
      console.log(`Number of students in ${key}: ${fieldName[key].length}. List: ${fieldName[key].join(', ')}`);
    }
  }
}

module.exports = countStudents;
