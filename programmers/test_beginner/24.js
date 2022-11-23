// 피자 나눠 먹기 (2)
function solution(n) {
    var answer = 0;
    for (let i = 1 ; i < n; i++) {
        if( 6 * i % n == 0){
            return i;
        }
    }
    return answer = n;
}

console.log(solution(6));
console.log(solution(10));
console.log(solution(4));
