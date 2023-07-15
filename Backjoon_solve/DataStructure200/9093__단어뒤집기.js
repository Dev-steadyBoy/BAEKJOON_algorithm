const input = require('fs').readFileSync('example.txt').toString().split('\n');

const len = +input[0];
for (let i = 1; i <= len; i++) {
  let words = input[i].split(' ');
  let result = '';
  for (const item of words) {
    if (item.length === 1) {
      result += `${item} `;
    } else {
      result += `${[...item].reverse().join('')} `;
    }
  }
  console.log(result);
}

//  수정
const input2 = require('fs').readFileSync('example.txt').toString().split('\n');

const len2 = +input2[0];
for (let i = 1; i <= len2; i++) {
  let words = input2[i].split(' ');
  const result = words.map((v) => [...v].reverse().join('')).join(' ');
  console.log(result);
}

// 내 스타일로 풀어보기 문자열의 특성을 이용해 베열로 타입 변환해서 reduce로 풀기
const input3 = require('fs').readFileSync('example.txt').toString().split('\n');

const len3 = +input3[0];
for (let i = 1; i <= len3; i++) {
  const result = input3[i].split(' ').reduce((a, c) => {
    if (c.length === 1) return a + `${c} `;
    else {
      return a + `${[...c].reverse().join('')} `;
    }
  }, '');
  console.log(result);
}
