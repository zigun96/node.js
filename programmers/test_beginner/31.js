// 문자 반복 출력하기
function solution1(my_string, n) {
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
// function solution2(my_string, n) {
//   var answer = '';
//   for(let i = 0; i < my_string.length; i++){
//       // answer += my_string.charAt(i).repeat(n);
//       let char = my_string[i];            
//       for(let j = 0; j < n; j++){
//           answer += char;
//       }
//   }
//   return answer;
// }

// function solution3(my_string, n) {
//   return [...my_string].map((char) => char.repeat(n)).join('');
//   return my_string.split('').map((char) => char.repeat(n)).join('');
// }

// function solution4(my_string, n) {
//   let answer = '';
//   for (let i = 0; i < my_string.length; i++) {
//     answer += my_string.charAt(i).repeat(n);
//   }
//   return answer;
// }

console.log(solution("hello",3));
