// 순서쌍의 개수
function solution1(n) {
    var answer = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) answer++;
    }
    return answer;
}

function solution2(n) {
    let ans = 0;
    for (let i = 1; i < Math.sqrt(n); i++)
        if (n%i === 0) ans+=2;

    return Number.isInteger(Math.sqrt(n)) ? ans+1 : ans;
}

function solution3(n) {
    return Array(n).fill(1).map((v,idx) => v + idx).filter(v => n % v === 0).length;
}

console.log(solution1(20));
console.log(solution1(100));