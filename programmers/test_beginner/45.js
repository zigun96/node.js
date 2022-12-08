// 배열의 유사도
function solution1(s1, s2) {
    var answer = 0;
    s1.forEach((value) => {
        if(s2.includes(value)){
        answer += 1;
        }
    });
    return answer;
}
function solution2(s1, s2) {
  var answer = s1.filter(a => s2.includes(a)).length;
  return answer; 
}

console.log(solution(["a", "b", "c"], ["com", "b", "d", "p", "c"]));
console.log(solution(["n", "omg"], ["m", "dot"]));
