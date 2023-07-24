const input = require('fs').readFileSync('/dev/stdin').toString().split('');

let word = '';
let isTag = false;
let result = '';

for (let str of input) {
  if (str === '<') {
    isTag = true;
    result += word.split('').reverse().join('') + str;
    word = '';
  } else if (str === '>') {
    isTag = false;
    result += word + str;
    word = '';
  } else if (str === ' ') {
    result += (!isTag ? word.split('').reverse().join('') : word) + ' ';
    word = '';
  } else {
    word += str;
  }
}

console.log((result + word.split('').reverse().join('')).replace(/\n/g, ''));
