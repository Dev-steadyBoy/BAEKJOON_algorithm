const input = require('fs').readFileSync('example.txt').toString().split('\n');

const isCorrectVPS = function () {
  const cnt = +input[0];

  for (let i = 1; i <= cnt; i++) {
    let result = 0;
    for (const item of input[i]) {
      item === '(' ? result++ : result--;
      if (result < 0) break;
    }

    console.log(result === 0 ? 'YES' : 'NO');
  }
};

isCorrectVPS();
