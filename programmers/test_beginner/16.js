function solution(numbers) {
  var answer = 0;
  var i = 0;
  var hap = 0;
  for(var item of numbers){
      i += 1;
      hap += item;
  }
  answer = hap / i;
  return answer;
}
numbers = [1,2,3,4,5,6,7,8,9,10]
console.log(solution(numbers));

numbers = [89,90,91,92,93,94,95,96,97,98,99]
console.log(solution(numbers));
