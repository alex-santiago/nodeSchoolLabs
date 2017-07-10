let fs = require('fs');

let dirname = process.argv[2];
let ext = process.argv[3];

if ((dirname !== '') && (typeof dirname != 'undefined') &&
	(ext !== '') && (typeof ext != 'undefined')) {
	fs.readdir(dirname, function callback(err, list) {
		if (err) {
			return console.log(err);
		}
		let path = require('path');

		for (var count=0; count<list.length; count++)
			if ((path.extname(list[count])===ext) || (path.extname(list[count])==='.'+ext))
				console.log(list[count]);
	});
}