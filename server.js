var express = require('express');
var app = express();
const http = require('http');
const serv = http.Server(app)
const io = require('socket.io')(serv, {});
setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);


app.use(express.static('public'));


app.get('/', function(request, response) {
  console.log(`Pinged ${Date()}`)
  response.sendFile(__dirname + '/views/index.html');
});
app.use('/', express.static(__dirname + '/views'));


let locx, locy
io.on('connection', async function(socket){
console.log(socket)
  socket.on('question', async function(data) {
            let reply = await cathyjs.startChatting(data.q)
              
                socket.emit('res', {res: reply});
            });
  
  })



var cathyjs = require("cathyjs");

serv.listen(3000, function(){
  console.log('listening on *:3000');
});
