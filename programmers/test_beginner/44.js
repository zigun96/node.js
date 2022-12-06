// 자릿수 더하기
function solution(n) {
  var answer = 0;
  [...n.toString()].forEach((value) => {
      answer += parseInt(value);
  })
  return answer;
}

console.log(solution(1234));
console.log(solution(930211));
