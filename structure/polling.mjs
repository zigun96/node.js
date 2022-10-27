// setTimeout(콜백 함수, 밀리초), setInterval(콜백 함수, 밀리초), setImmediate(콜백 함수)
import Queue from './queue.mjs';

let queue = new Queue(10); // Task queue

const timeout = setTimeout(() => {
  queue.add(() => {
  console.log('1.5초 후 추가');
  });
}, 1500);

const interval = setInterval(() => { // Worker
  console.log('1초마다 Polling');
  if (queue.size > 0) {
    let task = queue.delete();
    task();
  }
}, 1000);

const timeout2 = setTimeout(() => {
  queue.add(() => {
    console.log('실행되지 않습니다');
  });
}, 3000);

setTimeout(() => {
  clearTimeout(timeout2);
  clearInterval(interval);
}, 2500);

const immediate = setImmediate(() => {
  queue.add(() => {
    console.log('즉시 추가');
  });
});

const immediate2 = setImmediate(() => {
  queue.add(() => {
    console.log('실행되지 않습니다');
  });
});

clearImmediate(immediate2);
