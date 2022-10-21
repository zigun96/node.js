const array1 = [1, 2, 3, 4];

// 기본 반복을 통한 축적값 구하기
// var sum = 0;
// for (var item of array1) {
//   sum = sum + item;
// }

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);
// 10

const sum = [ {x: 1}, {x: 2}, {x: 3}].reduce(
  (accumulator, currentValue) => accumulator + currentValue.x,
  initialValue
);

console.log(sum);
// 6
