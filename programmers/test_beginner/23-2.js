// 배열 뒤집기
function solution(num_list) {
  var answer = [];
  for (let i = num_list.length - 1; i >= 0; i --){
      answer.push(num_list[i]);
  }
  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 1, 1, 1, 1, 2]));
console.log(solution([1, 0, 1, 1, 1, 3, 5]));
