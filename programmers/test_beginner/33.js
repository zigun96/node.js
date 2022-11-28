// 아이스 아메리카노
function solution(money) {
  var answer = [];
  var bottle = Math.floor(money / 5500);
  answer.push(bottle);
  answer.push(money - bottle * 5500);
  return answer;
}

console.log(solution(5500));
console.log(solution(15000));
