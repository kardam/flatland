var io = require('socket.io').listen(8422);

io.sockets.on('connection', function (socket) {

  console.log("client connected");

  socket.on('message', function (mm) {
    console.log(mm);
  });
  socket.on('disconnect', function () {
    socket.emit("dsds");
  });

  socket.send("nl");

});
