// 조건상 에라토스테네스의 체 쓰기도 좀 그렇고, 숫자의 범위도 크지않기 때문에 안 써도 큰 문제가 없다
const input = require('fs').readFileSync('example.txt').toString().split('\n');

const number = input[1].split(' ').map((v) => +v);
let result = 0;
for (let i = 0; i < number.length; i++) {
  if (number[i] === 1) continue;
  let count = 0;
  for (let j = 1; j <= Math.sqrt(number[i]); j++) {
    if (number[i] % j === 0) {
      count++;
    }
  }
  if (count < 2) result++;
}

console.log(result);
