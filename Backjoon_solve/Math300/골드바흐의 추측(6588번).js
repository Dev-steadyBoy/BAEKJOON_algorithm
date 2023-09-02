const input = require('fs')
  .readFileSync('example.txt')
  .toString()
  .split('\n')
  .map((v) => Number(v));

const max = 1000000;
const isPrime = new Array(max + 1).fill(true);
isPrime[0] = false;
isPrime[1] = false;

for (let i = 2; i <= Math.ceil(Math.sqrt(max)); i++) {
  if (!isPrime[i]) continue;
  isPrime[i] = true;

  for (let j = i ** 2; j <= max; j += i) {
    isPrime[j] = false;
  }
}

let result = '';
input.map((num) => {
  for (let i = 3; i < num; i += 2) {
    if (isPrime[i] && isPrime[num - i]) {
      return (result += `${num} = ${i} + ${num - i}\n`);
    }
  }
  if (num === 0) return;
  return (result += `Goldbach's conjecture is wrong.\n`);
});
console.log(result);
