const input = require('fs')
  .readFileSync('example.txt')
  .toString()
  .split(' ')
  .map((v) => Number(v));

function factorial(number) {
  return number > 1 ? number * factorial(number - 1) : 1;
}

console.log(factorial(input[0]));
