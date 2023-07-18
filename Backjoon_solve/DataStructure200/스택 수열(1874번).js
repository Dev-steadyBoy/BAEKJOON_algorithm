const input = require('fs')
  .readFileSync('example.txt')
  .toString()
  .split('\n')
  .map((v) => Number(v));

const len = input.shift();
const numbers = input;

function solution(len, numbers) {
  const stack = [];
  // +,-을 저장하는 변수
  let p_mStr = '';
  // 카운팅은 1부터
  let cnt = 1;

  for (let i = 0; i < len; i++) {
    const item = numbers[i];

    // cnt를 -1 하지 않는 이유: 스택에 -1을 하게 되면 스택에 들어가면 안되는 숫자가 쌓일 수 있다.
    while (cnt <= item) {
      stack.push(cnt);
      p_mStr += `+\n`;
      cnt++;
    }

    // 한 바퀴 다시 돌면 cnt가 초기화 되지 않기 때문에 팝된 숫자를 다시 푸시하게 되어있음.
    const checkPop = stack.pop();
    if (checkPop !== item) {
      return 'NO';
    }
    p_mStr += `-\n`;
  }
  return p_mStr;
}

const result = solution(len, numbers);
console.log(result);
