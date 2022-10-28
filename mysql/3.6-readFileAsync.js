const fs = require('fs').promises;

(async () => { // 이름없는 함수
  try {
    let data = await fs.readFile('./readme.txt'); 
    // 1. console 출력 직접 짜보기
    console.log(data);
    console.log(data.toString());
  }
  catch {
    console.error(err);
    // 2. try / catch 감싸보기
  } 
})(); // 이름없는 함수 바로 호출
