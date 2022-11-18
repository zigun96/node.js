// 각도기
function solution(angle) {
  var answer = 0;
  if (angle > 0 && angle < 90) {
      answer = 1;
  }
  else if(angle == 90) {
      answer = 2;
  }
  else if(angle > 90 && angle < 180){
      answer = 3;
  }
  else if(angle == 180){
      answer = 4;
  }
  return answer;
}

console.log(solution(70));
console.log(solution(91));
console.log(solution(180));
