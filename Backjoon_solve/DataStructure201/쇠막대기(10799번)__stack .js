const input = require('fs').readFileSync('example.txt').toString().split('');

let pipe = [];
let count = 0;
for (let i = 0; i < input.length; i++) {
  const item = input[i];

  if (item === '(' && input[i + 1] === ')') {
    count += pipe.length;
    i++;
  } else if (item === '(') {
    pipe.push(item);
  } else if (item === ')') {
    pipe.pop();
    count++;
  }
}

console.log(count);
