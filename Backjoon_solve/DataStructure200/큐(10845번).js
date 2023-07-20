const input = require('fs').readFileSync('example.txt').toString().split('\n');

const queue = [];
const result = [];
const len = Number(input[0]);

for (let i = 1; i <= len; i++) {
  const value = input[i];
  switch (value) {
    case 'pop':
      result.push(queue.shift() || -1);
      break;

    case 'size':
      result.push(queue.length);
      break;

    case 'empty':
      result.push(queue[0] ? 0 : 1);
      break;

    case 'front':
      result.push(queue[0] || -1);
      break;

    case 'back':
      result.push(queue[queue.length - 1] || -1);
      break;

    default:
      const item = value.split(' ')[1];
      queue.push(item);
      break;
  }
}

console.log(result.join('\n'));

// queue는 먼저 들어온 놈이 먼저 나가는 추상데이터 타입이다.
// 예를 들어 애버랜드에 입장하려고 줄서있는 사람들이라던가, 마트 계산대에 줄 서있는 사람들 모두 큐 형태의 구조이다.
// 이 문제에서는  (pop)←←←[←←←](push)←←←로 데이터가 움직인다.
