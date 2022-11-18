// x만큼 간격이 있는 n개의 숫자
function solution(x, n) {
  var answer = [];
  answer[0] = x;
  for(var i = 1; i < n; i ++){
      answer[i] = x * (i + 1); 
  }
  return answer;
}

console.log(solution(2,5));

console.log(solution(4,3));

console.log(solution(-4,2));
