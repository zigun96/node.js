const fs = require('fs');

let array = fs.readFileSync('/dev/stdin').toString().split('\n');
// let mul = parseInt(a) * parseInt(b) * parseInt(c);
array = array.filter((s) => s.length).map((s) => parseInt(s));
let mul = array.reduce((prev, cur) = prev * cur, 1);

let counting = new Array(10); // 길이가 10인 배열을 만들고
counting.fill(0); // 값을 0으로 채운다

while (mul) {
  counting[mul % 10]++;
  mul /= 10;
  mul = Math.floor(mul);
}
counting.forEach((count) => console.log(count));
// for (let count of counting) {
//   console.log(count);
// }

// 터미널에서 node baekjoon/2577.js 입력 후 숫자 3개 입력 ,ctrl + D로 출력확인
