http = require('http');

module.exports = {
	getUrl(url){
		http.get(url,processResponse).on("error", function (err) {
			console.log("Got error: " + err);
		});
	}
};

function processResponse(response) {
		response.setEncoding('utf8');
		response.on('data', function (data) {
			console.log(data);
			// data.forEach(function (line) {
			// 	console.log(line.toString());
			// });
		});
		response.on('error', console.error);
}
