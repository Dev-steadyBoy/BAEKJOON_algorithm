const input = require('fs').readFileSync('example.txt').toString().split('\n');

const len = input[0];
let stack = '';

for (let i = 1; i <= len; i++) {
  let item = input[i].split(' ');

  item.map((v) => {
    if (v.length === 1) {
      return (stack += `${v} `);
    } else {
      return (stack += `${[...v].reverse().join('')} `);
    }
  });
  console.log(stack);
  stack = '';
}
