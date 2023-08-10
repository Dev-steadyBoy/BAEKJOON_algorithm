const isPrime = (n) => {
  if (n == 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const [c, nums] = input.split('\n');

console.log(nums.split(' ').filter((v) => isPrime(v)).length);

// return을 능수능란하게 사용할 수 있도록 연습을 해야겠다..
