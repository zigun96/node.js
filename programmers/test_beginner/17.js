// 팩토리얼 함수
function solution(n) {
  var answer = 1;
  for (var i = n; i > 0 ; i--){
      answer *= i;
  }
  return answer;
}

console.log(solution(10));

console.log(solution(3));
