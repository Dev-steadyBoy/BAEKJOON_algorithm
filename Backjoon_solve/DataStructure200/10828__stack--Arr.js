const input = require('fs').readFileSync('example.txt').toString().split('\n');
//필요없는 첫 인덱스 숫자 제거
const len = input.shift();

const stack = [];
const result = [];

for (let i = 0; i < len; i++) {
  switch (input[i]) {
    case 'pop':
      result.push(stack.pop() || -1);
      break;

    case 'size':
      result.push(stack.length);
      break;

    case 'empty':
      result.push(stack[0] ? 0 : 1);
      break;

    case 'top':
      result.push(stack[stack.length - 1] || -1);
      break;

    default:
      // push 1 이렇게 입력받으니까 분리해서 split은 없애고 1만 푸시
      stack.push(input[i].split(' ')[1]);
      break;
  }
}

console.log(result.join('\n'));
