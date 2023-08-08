const input = require('fs').readFileSync('example.txt').toString().trim();
const strCollection = [];
for (let i = 0; i < input.length; i++) {
  strCollection.push(input.slice(i));
}
console.log(strCollection.sort().join('\n'));
