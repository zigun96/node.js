const express = require('express');
const ws = require('ws');

const app = express();
const clients = new Set();
const port = 8888;
const wss = new ws.Server({ noServer: true });

app.use((req, res) => {
  if (req.headers.upgrade?.toLowerCase() == 'websocket') {
    wss.handleUpgrade(req, req.socket, Buffer.alloc(0), onConnect);
  } else {
    const { nick } = req.query;
    if (nick) res.setHeader('Set-Cookie', 'nick=' + nick);
    res.sendFile(`${__dirname}/chatting.html`);
  }
});

// http.createServer(app).listen(...)
app.listen(port, () => {
  console.log(`http://localhost:${port} 웹소켓 서버 대기 중`);
});

function onConnect(socket) {
  clients.add(socket);
  socket.on('message', (message) => {
    message = message.toString(); // Buffer를 String으로
    clients.forEach((clients) => clients.send(message));
  });
  socket.on('close', () => {
    clients.delete(socket);
  });
}
