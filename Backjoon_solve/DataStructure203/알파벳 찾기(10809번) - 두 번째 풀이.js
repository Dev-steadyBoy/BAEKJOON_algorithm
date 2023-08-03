// 다른 사람풀이인데 indexOf메서드의 이해도가 높으신듯 내 객체코드보다 시간이 더 걸리네..
const input = require('fs').readFileSync('/dev/stdin').toString();

const result = [];

for (let i = 97; i <= 122; i++) {
  result.push(input.indexOf(String.fromCharCode(i)));
}

console.log(result.join(' '));
