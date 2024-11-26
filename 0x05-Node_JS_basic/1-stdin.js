let userInput = '';

process.stdin.setEncoding('utf-8');

process.stdin.on('data', (input) => {
  userInput = input.trim();
  console.log(`Your name is: ${userInput}`);
});

process.on('exit', (code) => {
  console.log('This important software is now closing');
});

console.log("Welcome to Holberton School, what is your name?");