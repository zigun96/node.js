
function solution(num1, num2) {
  var answer = 0;
  if(num1 == num2){
      answer = 1;
  }
  else answer = -1;
  
  return answer;
}

console.log(solution(2, 3));
console.log(solution(11, 11));
console.log(solution(7, 99));
