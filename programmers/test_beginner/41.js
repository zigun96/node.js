// 짝수 홀수 개수
function solution(num_list) {
  var answer = [];
  let odd = 0, even = 0;
  num_list.forEach((value) => {
      value % 2 == 0? even++ : odd++
  });
  answer.push(even);
  answer.push(odd);
  return answer;
}

console.log(solution([1,2,3,4,5]));
console.log(solution([1,3,5,7]));
