const fs = require('fs');
// 표준 입력을 파일에서 바이트 데이터를 읽듯이 가져와서
// 바이트를 문자열로 바꾼다.
let input = fs.readFileSync('/dev/stdin').toString();
const n = Number(input); // 입력 값을 숫자 n으로 받는다.

let out ='';
let j = n - 1;

for (let i = 1; i <= n; i++) {
  out += ' '.repeat(j);
  out += '*'.repeat(2*i);
  out += ' '.repeat(j);
  j--;
  console.log(out);
  out = '';
}
