// 분명 코드는 정상작동하는데 백준사이트에서 계속 오답처리가 됐다. 뭘까 생각하다가 만약에 빈 문자열이 들어왔을 때 0000으로 리턴 되는게 맞을까 ? 란 의문에 바로 코드를 수정함.. ㅎㅎ
const input = require('fs').readFileSync('example.txt').toString().split('\n');

for (let i = 0; i < input.length; i++) {
  const strArr = [0, 0, 0, 0];
  // 빈문자열이 나왔을 때 밑의 식을 적어주지 않으면 0 0 0 0 이 출력되므로 오답이 될 것이다.
  if (input[i].length === 0) continue;
  for (let j = 0; j < input[i].length; j++) {
    if (input[i].charCodeAt(j) >= 65 && input[i].charCodeAt(j) <= 90) {
      strArr[1]++;
    } else if (input[i].charCodeAt(j) >= 97 && input[i].charCodeAt(j) <= 122) {
      strArr[0]++;
    } else if (input[i].charCodeAt(j) >= 48 && input[i].charCodeAt(j) <= 57) {
      strArr[2]++;
    } else if (input[i][j] === ' ') {
      strArr[3]++;
    }
  }
  console.log(strArr.join(' '));
}
