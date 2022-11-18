// 양꼬치
function solution(n, k) {
    var answer = 0;
    k -= parseInt(n / 10); 
    return answer = 12000 * n + 2000 * k;
}

console.log(solution(10, 3));
console.log(solution(64, 6));