const input = require('fs')
  .readFileSync('example.txt')
  .toString()
  .split('\n')
  .map((v) => Number(v));

const len = input.shift();
const numbers = input;
const solution = function (len, numbers) {
  const stack = [];
  let tempStr = '';
  let cnt = 1;

  for (let i = 0; i < len; i++) {
    const curNum = numbers[i];

    while (cnt <= curNum) {
      stack.push(cnt);
      tempStr += `+\n`;
      cnt++;
    }

    let popedItem = stack.pop();
    if (popedItem !== curNum) return 'NO';
    tempStr += '-\n';
  }
  return tempStr;
};

console.log(solution(len, numbers));
