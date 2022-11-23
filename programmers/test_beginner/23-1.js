// 배열 뒤집기
function solution(num_list) {
  var length = num_list.length;
  var dump = 0;
  for (let i = 0; i < Math.ceil(length / 2); i++) {
    dump = num_list[i];
    num_list[i] = num_list[length - 1 - i];
    num_list[length - 1 - i] = dump;
  }
  return num_list;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 1, 1, 1, 1, 2]));
console.log(solution([1, 0, 1, 1, 1, 3, 5]));
