// 몫 구하기
function solution(num1, num2) {
  var answer = 0;
  // answer = (num1 - num1 % num2) / num2;
  answer = Math.floor(num1 / num2);
  return answer;
}

console.log(solution(10, 5));
console.log(solution(7, 2));
