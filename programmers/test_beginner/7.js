// 배열의 평균값
function solution(numbers) {
  var answer = 0;
  for(var item of numbers){
      answer += item;
  }
  return answer / numbers.length;
}
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(solution([89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]));
