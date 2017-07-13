http = require('http');

module.exports = {
	getUrl(url){
		http.get(url,processResponse).on("error", function (err) {
			console.log("Got error: " + err);
		});
	}
};

function processResponse(response) {
	var len = 0;
	var stream = '';

	response.setEncoding('utf8');
	response.on('data', function (data) {
		stream += data;
		len += data.length;
	});
	response.on('end', function(end) {
		console.log(len);
		console.log(stream);
	});
	response.on('error', console.error);
}

