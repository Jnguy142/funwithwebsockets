var express = require('express');
var path = require('path');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(path.resolve(__dirname, '../static')));

io.on('connection', function (socket) {
    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
    });
});

http.listen(3000, () => {
    console.log('you are listening on port 3000');
});