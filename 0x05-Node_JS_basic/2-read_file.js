const fs = require('fs');

// Function to count the number of students and the occurrences of each field
function countStudents(filePath) {
  const fieldCount = {};

  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const lines = fileContent.split('\n');

    // Log the number of students (lines minus the header)
    console.log('Number of students:', lines.length - 1);
    // Iterate over the lines (skip the first line)
    lines.slice(1).forEach((line) => {
      const values = line.split(',');
      const firstName = values[0].split(',');
      const field = values[3].trim();
      
      // Count the occurrences of each field
      if (!fieldCount[field]) {
        fieldCount[field] = {
            count: 0,
            firstNames: []
        };
      }
      fieldCount[field].count++;
      fieldCount[field].firstNames.push(firstName);
    });

    Object.keys(fieldCount).forEach((field) => {
        console.log(`Number of students in ${field}: ${fieldCount[field].count}. List: ${fieldCount[field].firstNames.join(', ')}`);
    });


  } catch (err) {
    console.log('Cannot load the database');
  }
}


module.exports = countStudents;