// 처음엔 팩토리얼로 풀려고 했는데, 테케에 통과가 안돼서 검색을 좀 해봤다.,,

// const input = require('fs').readFileSync('example.txt').toString().split(' ');

// function factorial(number) {
//   return number > 1 ? number * factorial(number - 1) : 1;
// }

// let strFactorial = factorial(input[0]) + '';
// let zeroCnt = 0;
// for (let i = strFactorial.length - 1; i >= 0; i--) {
//   const item = strFactorial[i];
//   if (item === '0') {
//     zeroCnt++;
//   } else {
//     break;
//   }
// }
// console.log(zeroCnt);

// 음 풀이를 몇 번 더 읽어봐야겠다 아직 이해가 안됐음..
const input = require('fs').readFileSync('example.txt').toString().split(' ');

function factorial(number) {
  let answer = 0;
  if (number === 0) answer;

  for (let i = 1; i <= number; i++) {
    if (i % 5 === 0) answer++;
    if (i % 25 === 0) answer++;
    if (i % 125 === 0) answer++;
  }
  return answer;
}

console.log(factorial(input));
