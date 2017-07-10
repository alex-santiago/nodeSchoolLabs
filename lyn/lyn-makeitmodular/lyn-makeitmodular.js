let fs = require('fs');
let mm = require('./lyn-mymodule');

let dirpath = process.argv[2];
let ext = process.argv[3];

if ((dirpath !== '') && (typeof dirpath != 'undefined') &&
	(ext !== '') && (typeof ext != 'undefined')) {
	mm(dirpath, ext, printContent);
}

function printContent(err, fileList) {
	if (err) {
		return console.log(err);
	}

	fileList.forEach(function(file) {
		console.log(file);
	});

}