// 문자열안에 문자열
function solution(str1, str2) {
    return str1.includes(str2)? 1 : 2;
}

console.log(solution("ab6CDE443fgh22iJKlmn1o","6CD"));
console.log(solution("ppprrrogrammers","pppp"));
