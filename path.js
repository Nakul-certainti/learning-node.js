const path = require('path');

console.log(path.sep);

const filepath = path.join('/path','/join','test.txt');
console.log(filepath);
const base = path.basename(filepath);
console.log(base);