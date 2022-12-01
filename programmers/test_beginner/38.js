// 최댓값 만들기(1)
function solution(numbers) {
  numbers = numbers.sort((a,b) => b-a);
  let [max1, max2] = [...numbers];
  return max1 * max2;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([0, 31, 24, 10, 1, 9]));
