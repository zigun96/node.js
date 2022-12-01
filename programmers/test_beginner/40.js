// 머쓱이보다 키 큰 사람
function solution(array, height) {
  var answer = 0;
  array.forEach((value) => {
      if(value > height) answer += 1
  });
  return answer;
}

console.log(solution([149, 180, 192, 170],167));
console.log(solution([180, 120, 140],190));
