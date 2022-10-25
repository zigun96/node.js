let queue = [];
let front = -1;
let rear = -1;

function queueAdd(value) {
  rear += 1;
  queue[rear] = value;
}

// 실제 배열의 데이터를 지우는 건 미구현
function queueDelete() {
if (rear > front) {
  front += 1;
  return queue[front];
}
throw Error('The queue is empty.');
}

queueAdd(4);
queueAdd(6);
queueAdd(1);

let data = queueDelete();
console.log(data);
console.log(queueDelete());
console.log(queueDelete());
console.log(queueDelete());
