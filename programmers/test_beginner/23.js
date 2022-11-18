// 배열 뒤집기
function solution(num_list) {
    var answer = [];
    var dump = 0;
    for(let i = 0; i < Math.floor(num_list.length / 2); i++) {
        dump = num_list[(num_list.length - 1) - i];
        num_list[(num_list.length - 1) - i] = num_list[i];
        num_list[i] = dump;
    }
    return answer;
}
console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1,1,1,1,1,2]));
console.log(solution([1,0,1,1,1,3,5]));