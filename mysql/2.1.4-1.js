function add1(x, y) {
  return x + y;
}

const add2 = (x, y) => {
  return x + y;
};

const add3 = (x, y) => x + y;

const add4 = (x, y) => (x + y);

function not1(x) {
  return !x;
}

const not2 = x => !x;

const operation = { add1, add2, add3, add4, not1, not2 }; // 함수들이 객체 operation 안으로 들어가 메소드가 됨

console.log(add1(1,1)); // 함수 호출
console.log(operation.add2(2,2)); // 메소드 호출
console.log(operation.not2(3 <= 3)); // 메소드 호출
