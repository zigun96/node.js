import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

// readline promise 
const rl = readline.createInterface({ input, output });
const abortable = new AbortController();
const timeout = setTimeout(() => abortable.abort(), 10000);
try {
    // await
  const answer = await rl.question('What is your favorite food? ', abortable);
  console.log(`Oh, so your favorite food is ${answer}`);
} catch (error) {
  console.error(error.message);
} finally {
  rl.close();
  clearTimeout(timeout);
}
