// 최대공약수로 나눠주면 최대공배수
const input = require('fs').readFileSync('example.txt').toString().split('\n');

const len = Number(input.shift());

for (let i = 0; i < len; i++) {
  const [a, b] = input[i].split(' ').map((v) => +v);
  let num1 = a;
  let num2 = b;
  while (num1 % num2 !== 0) {
    let re = num1 % num2;
    if (num1 % num2 !== 0) {
      num1 = num2;
      num2 = re;
    }
  }

  console.log((a * b) / num2);
}
