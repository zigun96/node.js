import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

do {ㅇ
  var answer = await rl.question('숫자 입력: ');

  if (!isNaN(Number(answer))) { // 예외처리
    console.log(`입력된 숫자는 ${answer} 입니다.`);
  } else {
    console.log(`${answer}은(/는) 숫자가 아닙니다.`);
  }
} while (answer !== 'exit');

rl.close();
