var friends 		= require('../data/friends.js');
var path 			= require('path');


module.exports = function(app){
	//API Routes
	app.get('/API/friends', function(req, res){
		res.json(friends);
	});

	

	app.post('/API/friends', function(req,res){
	var newscore = req.body.scores;
	var newscoreint = 0;
	var currentscoreint = [];
	
	
	for (var i = 0; i < newscore.length; i++) {
		newscoreint += parseInt(newscore[i]);
	}

	for (var j = 0; j < friends.length; j++){
		currentscoreint.push(friends[j].scores.reduce(function(a, b) { return a + b; }, 0));		
	}

	for (var k = 0; k < currentscoreint.length; k++) {
		if (currentscoreint[k] == newscoreint) {
			res.send(friends[k]);
		}
	}
	

	//console.log(currentscoreint);
	
	
	
	friends.push(req.body);
	});



}
