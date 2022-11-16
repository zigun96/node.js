function solution(slice, n) {
  var answer = 0;
  answer = Math.ceil(n / slice);
  return answer;
}

console.log(solution(7, 10));

console.log(solution(4, 12));
