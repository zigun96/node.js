const { odd, even } = require('./3.3-var');
const checkNumber = require('./3.3-func'); // checkNumber = checkOddOrEven

function checkStringOddOrEven(str) {
  if (str.length % 2) { // 홀수면
    return odd;
  }
  return even;
}

console.log(checkNumber(10)); // require한 checkOddOrEven 사용
console.log(checkStringOddOrEven('hello')); // 정의한 checkStringOddOrEven 사용
console.log(odd); // require한 변수 odd 사용
