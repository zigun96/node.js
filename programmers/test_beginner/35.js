// 로그인 성공?
function solution1(id_pw, db) {
  let [id, pw] = id_pw;
  for(let i = 0; i < db.length; i++){
      let [db_id, db_pw] = db[i];
      if(id == db_id && pw == db_pw) {
          return "login";
      }else if(id == db_id && pw != db_pw) {
          return "wrong pw";
      }
  }
  return "fail";   
}

// function solution2(id_pw, db) {
//   let [id, pw] = id_pw;
//   let find = db.find((id_pw) => id_pw[0] === id);
//   if (find == undefined) return "fail";
//   if (find[1] === pw) return "login";
//   else return "wrong pw";
// }

// function solution3(id_pw, db) {
//   let [id, pw] = id_pw;
//   let answer = "fail";
//   for (let i = 0; i < db.length; i++) {
//     let [db_id, db_pw] = db[i];
//     if (id !== db_id) {
//       continue;
//     }
//     if(pw === db_pw) answer = "login";
//     else answer = "wrong pw";
//     break;
//   }
//   return answer;
// }

console.log(solution(["meosseugi","1234"],[["rardss", "123"], ["yyoom", "1234"], ["meosseugi", "1234"]]));
console.log(solution(["programmer01", "15789"],[["programmer02", "111111"], ["programmer00", "134"], ["programmer01", "1145"]]));
console.log(solution(["rabbit04", "98761"],[["jaja11", "98761"], ["krong0313", "29440"], ["rabbit00", "111333"]]));
