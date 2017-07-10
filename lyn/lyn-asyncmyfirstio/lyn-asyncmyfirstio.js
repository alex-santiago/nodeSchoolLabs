let fs = require('fs');

filename = process.argv[2];

if ((filename !== '') && (typeof filename != 'undefined')) {
	fs.readFile(filename, function callback(err, buffer) {
		if (err) {
			return console.log(err);
		}
		linecount = buffer.toString().split('\n').length-1;
		console.log(linecount);
	});
}