const input = require('fs').readFileSync('example.txt').toString().split(' ');
const [a, b, c] = input;

console.log(Number(+a + +b) % c);
console.log(Number(+(a % c) + +(b % c)) % c);
console.log(Number(a * b) % c);
console.log(Number((a % c) * (b % c)) % c);
