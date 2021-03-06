var Hapi = require('hapi');
var Path = require('path');
var Vision = require('vision');

var server = new Hapi.Server({
	connections: {
		routes: {
			files: {
		    	relativeTo: __dirname
			}
		}
	}
});

server.register(Vision, function (err) {
    if (err) throw err;
});

server.views({
    engines: {
        html: require('handlebars')
    },
    path: Path.join(__dirname, 'templates')
});

server.connection({
	host: 'localhost',
	port: Number(process.argv[2] || 8080)
});


server.route({
    method: 'GET',
    path:'/',
    handler: {
    	view: 'index.html'
    }
});

server.start(function () {
	console.log('Server running at:', server.info.uri);
});




