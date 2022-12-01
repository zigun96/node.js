// 문자열 뒤집기
function solution(my_string) {
  let arr = [...my_string];
  return arr.reverse().join("");
}

console.log(solution("jaron"));
console.log(solution("bread"));
