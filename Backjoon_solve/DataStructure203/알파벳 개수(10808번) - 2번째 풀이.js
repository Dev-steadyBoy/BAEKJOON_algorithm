const input = require('fs').readFileSync('example.txt').toString().split('\n');

const str = input[0];
const len = str.length;

const solution = function (len) {
  const obj = {};
  for (let i = 0; i < 26; i++) {
    obj[String.fromCharCode(97 + i)] = 0;
  }
  for (let i = 0; i < len; i++) {
    obj[str[i]] += 1;
  }
  console.log(Object.values(obj).join(' '));
};

solution(len);
