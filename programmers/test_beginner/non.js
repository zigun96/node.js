function solution(array, n) {
  var answer = 0;
  for(item in array) {
      if(array[item] == n){
          answer += 1;
      }
  }
  return answer;
}

console.log(solution([1,1,2,3,4,5], 1));

console.log(solution([0,2,3,4], 1));
