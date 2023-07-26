const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

[len, ...numbers] = input;
numbers = numbers[0].split(' ').map((v) => +v);

function solution(len, numbers) {
  const stack = [];
  for (let i = 0; i < len; i++) {
    while (stack.length && numbers[stack[stack.length - 1]] < numbers[i]) {
      numbers[stack.pop()] = numbers[i];
    }
    stack.push(i);
  }
  while (stack.length) {
    numbers[stack.pop()] = -1;
  }

  console.log(numbers.join(' '));
}

solution(len, numbers);
