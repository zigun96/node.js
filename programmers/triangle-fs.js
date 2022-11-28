const fs = require('fs');
// 표준 입력을 파일에서 바이트 데이터를 읽듯이 가져와서
// 바이트를 문자열로 바꾼다.
let input = fs.readFileSync('/dev/stdin').toString();
const n = Number(input); // 입력 값을 숫자 n으로 받는다.

const numbers = new Array(n).fill().map((_, i)=> i + 1);

// TODO: numbers에 for-of문 써서 풀어보기.
for(value of numbers){
  console.log('*'.repeat(value));
}

// .forEach() 메소드 활용
// numbers.forEach((value) => {
//   console.log('*'.repeat(value));
// });
