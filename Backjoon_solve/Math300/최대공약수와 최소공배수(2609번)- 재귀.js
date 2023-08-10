const [a, b] = require('fs')
  .readFileSync('example.txt')
  .toString()
  .split(' ')
  .map((v) => +v);

function gcd(a, b) {
  const remainder = a % b;
  if (remainder === 0) {
    return b;
  }
  return gcd(b, remainder);
}
function getLcm(a, b) {
  let lcm = 1;
  while (true) {
    if (lcm % a === 0 && lcm % b === 0) {
      break;
    }
    lcm++;
  }
  return lcm;
}
console.log(gcd(a, b));
console.log(getLcm(a, b));
