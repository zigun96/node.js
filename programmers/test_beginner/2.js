// 연속된 수의 합
function solution(num, total) {
  var answer = [];
  var half_num = num / 2;
  var center = total / num;
  var init_num = Math.ceil(center - half_num);
  
  for (var i = 0; i < num; i++){
      answer[i] = init_num++;
  }
  return answer;
}
var answer = 0;

answer = solution(3,12)
console.log(answer);

answer = solution(5,15)
console.log(answer);

answer = solution(4,14)
console.log(answer);

answer = solution(5,5)
console.log(answer);
