// 어설픈 스택으로 구현해보기.. 쌓기만 가능ㅋㅋㅋㅋ
const input = require('fs').readFileSync('example.txt').toString().split('\n');

const len = input[0];
let stack = '';

for (let i = 1; i <= len; i++) {
  let item = input[i].split(' ');
  let cnt = 0;

  while (cnt < item.length) {
    if (item[cnt].length === 1) {
      stack.push(`${item[cnt]}`);
    } else {
      const reverseStr = [...item[cnt]].reverse().join('');
      stack.push(`${reverseStr}`);
    }
    cnt++;
  }
  console.log(stack);
  console.log(stack.join(' '));
  stack = [];
}
