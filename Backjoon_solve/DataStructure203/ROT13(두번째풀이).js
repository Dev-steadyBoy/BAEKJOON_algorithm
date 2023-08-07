const input = require('fs').readFileSync('example.txt').toString();

const len = input.length;
const ROT13 = (len) => {
  const bigStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const smallStr = 'abcdefghijklmnopqrstuvwxyz';
  let str = '';

  for (let i = 0; i < len; i++) {
    if (input[i] === ' ') {
      str += ' ';
      continue;
    }
    if (Number.isInteger(+input[i])) {
      str += input[i];
      continue;
    }
    if (bigStr.includes(input[i])) {
      let strIdx = bigStr.indexOf(input[i]);
      if (strIdx > 12) {
        str += bigStr[strIdx - 13];
      } else {
        str += bigStr[strIdx + 13];
      }
    } else {
      let strIdx = smallStr.indexOf(input[i]);
      if (strIdx > 12) {
        str += smallStr[strIdx - 13];
      } else {
        str += smallStr[strIdx + 13];
      }
    }
  }
  console.log(str);
};

ROT13(len);
