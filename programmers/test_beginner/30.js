// 배열 두배 만들기
function solution(numbers) {
  var answer = [];
  // var i = 0;
  // for( var item of numbers) {
  //     answer[i] = item * 2;
  //     i++;
  // }
  return answer = numbers.map((value) => value * 2);
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 2, 100, -99, 1, 2, 3]));
