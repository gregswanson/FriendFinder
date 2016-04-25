var friends 		= require('../data/friends.js');
var path 			= require('path');


module.exports = function(app){
	//API Routes
	app.get('/API/friends', function(req, res){
		res.json(friends);
	});

	

	app.post('/API/friends', function(req,res){
	console.log(req.body);
	admin.push(req.body);
	res.send("friends");
	});



}
