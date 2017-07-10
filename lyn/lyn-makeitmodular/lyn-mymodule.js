let fs = require('fs');
let path = require('path');

module.exports = function (dirpath, ext, returnResult) {
		// list the contents of a directory path
		fs.readdir(dirpath, function (err, fileList) {
			if (err) {
				return returnResult(err);
			}
			
			var filteredFiles = [];

			fileList.forEach(function (file) {
				if (path.extname(file) === '.' + ext) {
					filteredFiles.push(file);
				}
			});
			return returnResult(null, filteredFiles);
		});

};