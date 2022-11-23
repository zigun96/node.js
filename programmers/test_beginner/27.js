// 제곱수 판별하기
function solution(n) {
  var answer = 0;
  if(Math.sqrt(n) % 1 == 0){
      answer = 1;
  } else {
      answer = 2;
  }
  return answer;
}

console.log(solution(144));
console.log(solution(976));
