var net = require('net')
var format = require('date-fns/format')

var port = Number(process.argv[2] || 8000);

var server = net.createServer(function (socket) {
	date = new Date();

	socket.write(format(date, "YYYY-MM-DD HH:mm") + '\n');
  	socket.end();
})

server.listen(port, "localhost");