// trim메서드를 사용 안했을 땐 length값이 10이 나온다.(공백 포함) 이유는 입력값에 개행이 추가 되어있었다..
// 그래서 입력값을 고치고 제출했는데 이상하게 틀렸다고 나온다..? trim메서드를 사용하면 정답인거 보니 '     hi'; 이런 문자열을 가진 테스트도 주는 것인가,,? 조건상 알파벳 대소문자만 나온다고 하는데 흠..
const input = require('fs').readFileSync('example.txt').toString().trim();

console.log(input.length);
