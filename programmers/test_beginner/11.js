// 피자 나눠먹기 (3)
function solution(slice, n) {
  var answer = 0;
  answer = Math.ceil(n / slice);
  return answer;
}

console.log(solution(7, 10));

console.log(solution(4, 12));
