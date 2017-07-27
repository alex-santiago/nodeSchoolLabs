var mongo = require('mongodb').MongoClient;

var arg = process.argv[2];

var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err, db) {
	// db gives access to the database
	var coll = db.collection('parrots')
	coll.find({
		age: { $gt: +arg
			 }
	}).toArray(function(err, docs) {
		if (err) throw err;
		
		console.log(docs);

    	db.close();

    })
});




