const createQueue = (max) => ({
  array: new Array(max),
  size: 0,
  front: -1,
  rear: -1,
  add: function (value) {
    if (this.size == max) {
      throw Error('The queue is full.');
    }
    this.size += 1;
    this.rear = (this.rear + 1) % max; // 최대치 이상으로 넘지 않게 '%'연산자를 통해 rear를 조정해줌
    this.array[this.rear] = value;
  },
  delete: function () {
    if (this.size == 0) {
      throw Error('The queue is empty.');
    }
      this.size -= 1;
      this.front = (this.front + 1) % max;
      return this.array[this.front];
  },
});

// 배열의 해당 값을 지웠다라고 출력해줌 (실제론 남아있는 상태)

let queue1 = createQueue(3);

queue1.add(4);
queue1.add(queue1, 6);
queue1.add(queue1, 1);
let data = queue1.delete(); // 4
console.log(data);

queue1.add(9);
console.log(queue1.delete()); // 6
console.log(queue1.delete()); // 1
console.log(queue1.delete()); // 9
console.log(queue1);

if (queue1.size > 0) { // is not empty
  console.log(queueDelete(queue1));
} else {
  console.warn('The queue is empty');
}

let queue2 = createQueue(2);
queue2.add(1);
queue2.add(2);
// queue2.add(8); // error

console.log(queue2);
