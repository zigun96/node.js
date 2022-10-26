import assert from 'assert';

class Queue {
  constructor(max) {
    this.array = new Array(max);
    this.length = max;
    this.size = 0;
    this.front = -1;
    this.rear = -1;
  }

  add(value) {
    // 조건식이 거짓이면 뒤에 것을 반환함
    assert(this.size < this.length, 'The queue is full.');
    this.size += 1;
    this.rear = (this.rear + 1) % this.length;
    this.array[this.rear] = value;
  }

  delete() {
    assert(this.size > 0, 'The queue is empty.');
    this.size -= 1;
    this.front = (this.front + 1) % this.length;
    return this.array[this.front];
  }
}

let queue1 = new Queue(3);
queue1.add(4);
queue1.add(queue1, 6);
queue1.add(queue1, 1);
let data = queue1.delete(); // 4
console.log(data);
queue1.add(9);
console.log(queue1.delete()); // 6
console.log(queue1.delete()); // 1
console.log(queue1.delete()); // 9

if (queue1.size > 0) {
  // is not empty
  console.log(queue1.delete());
} else {
  console.warn('The queue is empty');
}

export default Queue;
//import Queue from './Queue.mjs'
