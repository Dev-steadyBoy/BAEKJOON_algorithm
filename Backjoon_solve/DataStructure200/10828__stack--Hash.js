const input = require('fs').readFileSync('example.txt').toString().split('\n');
//필요없는 첫 인덱스 숫자 제거
input.shift();

const stack = [];

const op = {
  pop: () => stack.pop() || -1,
  size: () => stack.length,
  empty: () => (stack[0] ? 0 : 1),
  top: () => stack[stack.length - 1] || -1,
  push: (item) => {
    stack.push(item.split(' ')[1]);
    return '';
  },
};

const result = input.reduce(
  (acc, cur) => acc + (op[cur] ? `${op[cur]()}\n` : op.push(cur)),
  ''
);

console.log(result);
