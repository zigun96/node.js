const express = require('express'); //'express'가 일종의 서버
const app = express();

app.get('/', function (req, res) { // request, response
  res.send('Hello World') // send는 HTTP.body를 전송
});

app.listen(3000, function() {
    console.log('Listening: http://localhost:3000')
});
 