const input = require('fs').readFileSync('example.txt').toString().split('\n');

let lStack = input[0].split('');
let rStack = [];
let cntCases = Number(input[1]) + 1;

for (let i = 2; i <= cntCases; i++) {
  const v = input[i];
  switch (v) {
    case 'L':
      if (lStack.length) {
        rStack.push(lStack.pop());
      }
      break;

    case 'D':
      if (rStack.length) {
        lStack.push(rStack.pop());
      }
      break;

    case 'B':
      if (lStack.length) {
        lStack.pop();
      }
      break;

    default:
      lStack.push(v.split(' ')[1]);
  }
}

while (rStack.length) {
  lStack.push(rStack.pop());
}

console.log(lStack.join(''));
// 두개의 스택을 사용하는 이유: L과 D로 왼쪽과 오른쪽으로 이동하는 커서를 push와 pop으로 구현이 가능함.
// 커서를 왼쪽으로 옮긴다면 lStack의 끝 값은 일단 right 스택에 푸시하면 된다. 오른쪽으로 옮긴다면 right 스택에 있던 값을 leftStack에 푸시하면 된다.
// 🌟🌟양쪽 끝을 손바닥에 올려놓은 칼라링 장난감(옛날 어린이 장난감) 처럼 두 스택을 왔다갔다 하는 것임
// length가 0인 경우 커서가 양 끝 지점에 위치했다는 것임.
