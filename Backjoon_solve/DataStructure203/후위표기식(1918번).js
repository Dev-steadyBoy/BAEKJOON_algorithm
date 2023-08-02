// 세 번 복습함... 이해 완 ㅋㅋ
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let items = input[0];
const len = items.length;

function solution(len) {
  const stack = [];
  let str = '';
  for (let i = 0; i < len; i++) {
    const item = items[i];
    if ('A' <= item && item <= 'Z') {
      str += item;
    } else if (item === '(') {
      stack.push(item);
    } else if (item === ')') {
      while (stack.length && stack[stack.length - 1] !== '(') {
        str += stack.pop();
      }
      stack.pop(); // ( 지워주는 것임
    } else if (item === '+' || item === '-') {
      while (stack.length && stack[stack.length - 1] !== '(') {
        str += stack.pop();
      }
      stack.push(item);
    } else if (item === '*' || item === '/') {
      while (
        (stack.length && stack[stack.length - 1] === '*') ||
        stack[stack.length - 1] === '/'
      ) {
        str += stack.pop();
      }
      stack.push(item);
    }
  }

  while (stack.length) {
    str += stack.pop();
  }

  console.log(str);
}

solution(len);
