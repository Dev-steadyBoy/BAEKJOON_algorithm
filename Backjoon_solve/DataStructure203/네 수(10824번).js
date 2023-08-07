const input = require('fs').readFileSync('example.txt').toString().split(' ');

const [A, B, C, D] = input;
console.log(Number(A + B) + Number(C + D));
