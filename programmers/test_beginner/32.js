// 가위 바위 보
function solution(rsp) {
  var answer = '';
  var arr = [];
  var sol = {
      0 : 5,
      2 : 0,
      5 : 2,
  };
  arr = [...rsp].map(value => sol[value]);
  answer = arr.join("");
  
  return answer;
}

console.log(solution("2"));
console.log(solution("205"));
