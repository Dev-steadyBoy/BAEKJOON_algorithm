// 객체로 해결하는 법, 배열로 해결하는 법  두 방법을 구현해봄
const input = require('fs').readFileSync('example.txt').toString().split('\n');

const str = input[0];
const len = str.length;

const solution = function (len) {
  const arr = new Array(26).fill(0);
  for (let i = 0; i < len; i++) {
    const ASCII = str.charCodeAt(i) - 97;
    arr[ASCII] += 1;
  }
  console.log(arr.join(' '));
};

solution(len);
