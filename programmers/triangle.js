const readline = require('readline');
// stdio: Standard Input / Output
const rl = readline.createInterface({
  input: process.stdin, // Standard Input
  output: process.stdout, // Standard Output
});

let n = 0;

// 이벤트 리스너 등록으로 입출력
// String 'line'으로 입력을 받음
rl.on('line', function (line) {
  n = Number(line);

// 'Ctrl + D' 인터페이스 종료시 
}).on('close', function () {
  let answer = '';

  for (let i = 1; i <= n; i++) {
      answer += '*'.repeat(i);
      answer += '\n';
  }
  console.log(answer);
});
