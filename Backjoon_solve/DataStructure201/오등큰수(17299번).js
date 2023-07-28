// 수정본
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let [n, ...numbers] = input;
numbers = numbers[0].split(' ');

function solution(n, numbers) {
  const count = {};
  // 등장횟수 체크하기
  numbers.forEach((v) => {
    count[v] = (count[v] || 0) + 1;
  });

  // 오등큰수 찾기
  const stack = [];
  for (let i = 0; i < n; i++) {
    while (
      stack.length &&
      count[numbers[stack[stack.length - 1]]] < count[numbers[i]]
    ) {
      numbers[stack.pop()] = +numbers[i];
    }
    stack.push(i);
  }

  while (stack.length) {
    numbers[stack.pop()] = -1;
  }
  console.log(numbers.join(' '));
}

solution(n, numbers);
/* 
const input = require('fs').readFileSync('example.txt').toString().split('\n');

let [n, ...numbers] = input;
numbers = numbers[0].split(' ');

function solution(n, numbers) {
  const stack = [];
  const count = {};
  // 등장횟수 체크하기
  for (let i = 0; i < n; i++) {
    if (count[numbers[i]]) {
      count[numbers[i]] += 1;
      continue;
    }
    count[numbers[i]] = 1;
  }

  // 오등큰수 찾기
  for (let i = 0; i < n; i++) {
    while (
      stack.length &&
      count[numbers[stack[stack.length - 1]]] < count[numbers[i]]
    ) {
      numbers[stack.pop()] = +numbers[i];
    }
    stack.push(i);
  }

  while (stack.length) {
    numbers[stack.pop()] = -1;
  }
  console.log(numbers.join(' '));
}

solution(n, numbers);
*/
