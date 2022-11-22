function solution(dot) {
  var answer = 0;
  if (dot[0] > 0) {
    if (dot[1] > 0) {
      answer = 1;
    } else {
      answer = 4;
    }
  } else {
    if (dot[1] > 0) {
      answer = 2;
    } else {
      answer = 3;
    }
  }
  return answer;
}

console.log('제'+solution([2,4])+'사분면');
console.log('제'+solution([-7,9])+'사분면');
