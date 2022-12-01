// 중앙값 구하기
function solution(array) {
  array = array.sort((a,b) => a-b);
  return array.sort[Math.floor(array.length / 2)];
}

console.log(solution([1, 2, 7, 10, 11]));
console.log(solution([9, -1, 0]));
