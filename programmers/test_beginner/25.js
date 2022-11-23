// 옷가게 할인 받기
function solution(price) {
  var answer = 0;
  if (price >= 500000) {
    price *= 0.8;
  } else if (price >= 300000) {
    price *= 0.9;
  } else if(price >= 100000){
    price *= 0.95;
  }
  return parseInt(answer = price);
}
console.log(solution(150000)+'원');
console.log(solution(580000)+'원');
