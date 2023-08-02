// 참고해야할 것: 객체의 주솟값을 변수에 저장하는 부분
let input = require('fs').readFileSync('example.txt').toString().split('\n');

const len = Number(input.shift());
// 영단어만 출력
let expression = input.shift().split('');
input = input.map((v) => Number(v));

const solution = (len) => {
  const numObj = {};
  for (let i = 0; i < len; i++) {
    numObj[String.fromCharCode(65 + i)] = input[i];
  }

  // 계산해주는 객체
  const calculator = {
    '+': (a, b) => a + b,
    '*': (a, b) => a * b,
    '-': (a, b) => a - b,
    '/': (a, b) => a / b,
  };

  // 대문자 영단어를 숫자로 바꿔주기
  const operators = ['+', '-', '*', '/'];
  const transformExpression = expression.map((value) =>
    !operators.includes(value) ? numObj[value] : value
  );

  const stack = [];
  // 숫자는 스택에 담아주고 op가 오면 계산해주기
  for (let i = 0; i < transformExpression.length; i++) {
    let pushValue = transformExpression[i];
    if (operators.includes(pushValue)) {
      const secondValue = stack.pop();
      const firstValue = stack.pop();
      const calculatefunc = calculator[pushValue];
      pushValue = calculatefunc(firstValue, secondValue);
    }
    stack.push(pushValue);
  }
  console.log(stack[0].toFixed(2));
};

solution(len);
