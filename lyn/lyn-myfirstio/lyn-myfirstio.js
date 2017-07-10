let fs = require('fs');

filename = process.argv[2];

if ((filename !== '') && (typeof filename != 'undefined')) {
	buffer = fs.readFileSync(filename);
	 text = buffer.toString();
	 lines = text.split('\n');
	 linecount = lines.length-1;
	 console.log(linecount);
}