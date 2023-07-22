const input = require('fs').readFileSync('example.txt').toString().split('\n');

const len = Number(input[0]);

const deque = [];
const numArr = [];
for (let i = 1; i <= len; i++) {
  let [cmd, num] = input[i].split(' ');
  switch (cmd) {
    case 'push_back':
      deque.push(num);
      break;
    case 'push_front':
      deque.unshift(num);
      break;
    case 'pop_front':
      numArr.push(deque.shift() || -1);
      break;
    case 'pop_back':
      numArr.push(deque.pop() || -1);
      break;
    case 'back':
      numArr.push(deque[deque.length - 1] || -1);
      break;
    case 'front':
      numArr.push(deque[0] || -1);
      break;
    case 'empty':
      numArr.push(deque.length ? 0 : 1);
      break;
    case 'size':
      numArr.push(deque.length);
      break;
  }
}
console.log(numArr.join('\n'));
