function solution(num, total) {
  var answer = [];
  if (num % 2 == 1){
      var odd_center = parseInt(total / num);
      var ii = odd_center;
      var rr = odd_center;
      for (var i = 0; i <= num / 2; i++){
          answer[i] = ii--;
      }
      for (var i = (num / 2) + 1; i < num; i++){
          answer[i] = ++rr;
      }
  }
  
//     else if (num % 2 != 1){
//         var even_center = Math.floor(total / 2);
//     }
  
  return answer;
}
solution(3,12)
console.log(answer);

solution(5,15)
console.log(answer);

solution(4,14)
console.log(answer);

solution(5,5)
console.log(answer);

