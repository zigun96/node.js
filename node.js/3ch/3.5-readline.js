const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
// const { stdin, stdout } = require('node:process');

const rl = readline.createInterface({ input, output });
// const r1 = readline.createInterface({ input: stdin, output: stdout });

rl.question('What is your favorite food? ', (answer) =>{
  console.log(`Oh, so your favorite food is ${answer}`)
  rl.close();}
);
