// 제일 작은 수 제거하기
function solution(arr) {
  var answer = [];
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  arr.length <= 1 ? answer.push(-1) : answer = arr;
  return answer;
}

console.log(solution([4, 3, 2, 1]));
console.log(solution([10]));
