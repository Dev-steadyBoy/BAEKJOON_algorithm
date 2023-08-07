const input = require('fs').readFileSync('example.txt').toString();

const len = input.length;
const ROT13 = (len) => {
  let str = '';

  for (let i = 0; i < len; i++) {
    let askiiOverValue = String.fromCharCode(input[i].charCodeAt(0) - 13);
    let rotCal = String.fromCharCode(input[i].charCodeAt(0) + 13);

    if (input[i] === ' ') {
      str += ' ';
      continue;
    }
    if (Number.isInteger(+input[i])) {
      str += input[i];
      continue;
    }
    if (input[i].charCodeAt(0) >= 65 && input[i].charCodeAt(0) <= 90) {
      if (input[i].charCodeAt(0) > 77) {
        str += askiiOverValue;
      } else {
        str += rotCal;
      }
    } else {
      if (input[i].charCodeAt(0) > 109) {
        str += askiiOverValue;
      } else {
        str += rotCal;
      }
    }
  }
  console.log(str);
};

ROT13(len);
