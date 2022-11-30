// 삼각형의 완성조건(1)
function solution(sides) {
  var answer = 0;
  sides.sort();
  let [short1, short2, long] = sides;
  answer = short1 + short2 > long? 1 : 2;
  return answer;
}

console.log(solution([1, 2, 3]));
console.log(solution([3, 6, 2]));
console.log(solution([199, 72, 222]));
