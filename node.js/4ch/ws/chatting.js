const fs = require('fs');
const http = require('http');
const ws = require('ws'); // npm install ws

const clients = new Set();
const port = 8888;
const wss = new ws.Server({ noServer: true });

http
  .createServer((req, res) => {
    if (req.headers.upgrade?.toLowerCase() == 'websocket') {
      wss.handleUpgrade(req, req.socket, Buffer.alloc(0), onConnect);
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
      res.end(fs.readFileSync(`${__dirname}/chatting.html`));
    }
  })
  .listen(port, () => {
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
