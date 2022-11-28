// 배열 원소의 길이
function solution(strlist) {
  var answer = [];
  strlist.forEach((value) => {answer.push(value.length)});
  return answer;
}
console.log(solution(["We","are","the","world!"]));
console.log(solution(["I","Love","Programmers."]));
