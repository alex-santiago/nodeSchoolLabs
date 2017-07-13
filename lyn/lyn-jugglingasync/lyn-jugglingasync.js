var http = require('http');
var bl = require('bl');
var count = 0;
var stream = [];

function getUrl(idx){

	http.get(process.argv[2 + idx], function(response) {

		response.pipe(bl(function (err, data) {

			stream[idx] = data.toString();
			count++;

			if(count === 3) {

				for (var i = 0; i < 3; i++) {
					console.log(stream[i]);
				}

			};
		}));
	});
};

for ( var i = 0; i < 3; i++){
	getUrl(i);
}
