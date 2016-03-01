'use strict';
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var badges=require('./models/badges');
var subSocket = require('./lib/subscribe.js');

server.listen(3000, function() {
    console.log("pubserver_client started");
});

app.use(express.static('public'));

app.get('/', function() {
    res.sendFile('./public/index.html');
});
io.sockets.on('connection', function(socket) {
    badges.get(function(err, data) {
        if (err)return;
        data.forEach(function(badge){
        	io.sockets.emit("badge",badge);
        })

    })
});
subSocket.on('message', function(message) {
 	io.sockets.emit('badge',message);
});
