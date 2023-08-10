const [a, b] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split(' ')
  .map((v) => +v);

let num1 = a;
let num2 = b;

while (num1 % num2 !== 0) {
  let temp = num1 % num2;
  if (temp !== 0) {
    num1 = num2;
    num2 = temp;
  }
}

console.log(num2);
console.log((a * b) / num2);

// 최대공약수로 나눠주면 최소공배수를 구할 수 있음.
