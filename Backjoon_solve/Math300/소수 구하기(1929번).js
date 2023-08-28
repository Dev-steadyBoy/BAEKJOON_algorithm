const input = require('fs').readFileSync('example.txt').toString().split(' ');

const [min, max] = [+input[0], +input[1]];

const prime = { 1: true };
for (let i = 2; i <= Math.ceil(Math.sqrt(max)); i++) {
  if (prime[i]) {
    continue;
  }
  for (let j = i * 2; j <= max; j += i) {
    prime[j] = true;
  }
}
const result = [];
for (let i = min; i <= max; i++) {
  if (!prime[i]) {
    result.push(i);
  }
}

console.log(result.map((v) => Number(v)).join(`\n`));
