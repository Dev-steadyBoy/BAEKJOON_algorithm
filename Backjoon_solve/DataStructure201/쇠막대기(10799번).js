const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .replaceAll('()', '_');

let dividedPipe = 0;
let count = 0;
for (let str of input) {
  if (str === '(') {
    count++;
  } else if (str === ')') {
    count--;
    dividedPipe++;
  } else if (str === '_') {
    dividedPipe += count;
  }
}
console.log(dividedPipe);

// () : 레이저빔
// 레이저빔을 _로 치환해서 풀기
