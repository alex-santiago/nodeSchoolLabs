myHttp = require('./lyn-myhttp');

let url = process.argv[2];

if ( (url !== '') && (typeof url != 'undefined') ) {
	myHttp.getUrl(url);
}
