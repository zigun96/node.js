const fs = require('fs');
// Control + D 로 콘솔입력 끝내기
let [a, b] = fs.readFileSync('/dev/stdin').toString().split(' ');
a = parseInt(a);
b = parseInt(b);
// A+B 출력
console.log(a + b);
// A-B 출력
console.log(a - b);
// A*B 출력
console.log(a * b);
// A/B 출력
console.log(parseInt(a / b));
// A%B(나머지) 출력
console.log(a % b);
