// 문자 반복 출력하기
function solution(my_string, n) {
  var answer = '';
  var arr1 = [...my_string];
  var arr2 = [];    
  for(let i = 0; i < arr1.length; i++){
      for(let j = 0; j < n; j++){
          arr2.push(arr1[i]); 
      }
  }
  answer = arr2.join("");
  return answer;
}

console.log(solution("hello",3));
