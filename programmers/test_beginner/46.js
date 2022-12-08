// 특정 문자 제거하기
function solution1(my_string, letter) {
  var answer1 = [...my_string];
  var answer2 = [...my_string];
  answer1.forEach((value) => {
      if(value == letter) {
      answer2.splice(answer2.indexOf(value),1);
      }
  });
  return answer2.join('');
}

function solution2(my_string, letter) {
  var answer = [...my_string];
  answer = answer.filter((value) => value != letter);
  return answer.join('');
}

console.log(solution1("abcdef","f"));
console.log(solution2("BCBdbe","B"));
