const input = require('fs').readFileSync('example.txt').toString().split(' ');

const n = Number(input[0]);
const k = Number(input[1]);

const solution = function (len, k) {
  const queue = [];
  const result = [];

  // 큐 생성
  for (let i = 1; i <= len; i++) {
    queue.push(i);
  }

  // 요세푸스 순열 구하기
  let countK = 1;
  while (queue.length) {
    if (countK % k === 0) {
      result.push(queue.shift());
    } else {
      queue.push(queue.shift());
    }
    countK++;
  }

  // 출력
  console.log(`<${result.join(', ')}>`);
};

solution(n, k);
