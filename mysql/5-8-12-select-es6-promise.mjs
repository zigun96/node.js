import dotenv from 'dotenv';
import express from 'express';
import mysql from 'mysql2';
const app = express();

dotenv.config({ path: "mysql/.env" }); // yarn add dotenv

app.get("/", (req, res) => { // '=>' function의 람다식 표현
  // request, response
  const connection = mysql.createConnection({ 
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  }).promise(); // promise() 사용 : connection이 promise connection이 됨

  let body = "<h1>single row</h1>"; // 한 줄 출력
  
  // promise로 나옴
  let queryPromise = connection.query('SELECT * FROM topic WHERE id = ?', [1]);
  queryPromise
    .then((value) => {
      let [results, fields] = value;
      console.log(results, fields);
      let [row] = results; // let row = results[0];
      body += `<h2>${row.title}</h2>`;
      body += row.description;
      return connection.query('SELECT * FROM topic'); // 두 번째 쿼리 프로미스
    })
    .then(([results, fields]) => { // 두 번째 쿼리 결과 체이닝
      console.log({results, fields});
      body += "<h1>multi row</h1>";
      // for (let row of results){
      //   let title = row.title, description = row.description;
      
      // for (let {title, description} of results) {
      //   body += `<h2>${title}</h2>`;
      //   body += description;
      // }
      results.forEach(({ title, description }) => {
        body += `<h2>${title}</h2>`;
        body += description;
      });
      res.send(body);
    })
    .catch(console.error)
    .finally(() => connection.destroy());
});

//   connection.query(
//     // 비동기 전송
//     "SELECT * FROM topic WHERE id = ?", [1],
//     (err, results, fields) => { // '=>' function의 람다식 표현
//       console.log({err, results, fields});
//       let [row] = results; // let row = result[0];
      
//       connection.query(
//         // 비동기 전송
//         "SELECT * FROM topic",
//         [1],
//         (err, results, fields) => { // '=>' function의 람다식 표현
//           console.log({err, results, fields});
//           for (let {title, description} of results) {
//             body += `<h2>${title}</h2>`;
//             body += description;
//           }
//           res.send(body);
//         }
//       );
//     }
//   );
// });

app.listen(3000, function () {
  console.log(process.env);
  console.log("Listening: http://localhost:3000");
});
