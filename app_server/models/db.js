var mongoose = require('mongoose');
var gracefulShutdown;
var dbURL = 'mongodb://localhost/Loc8r';
mongoose.connect(dbURL);
//For Windows
/*
var readLine = require("readline");
if (process.platform === "win32") {
	var r1 = readLine.createInterface ({
		input: process.stdin,
		output: process.stdout
	});
	r1.on ("SIGINT", function(){
		process.emit("SIGINT");
	})
}
*/

mongoose.connection.on('connected', function(){
	console.log('Mongoose connected to '+ dbURL);
});
mongoose.connection.on('error', function(err){
	console.log('Mongoose connection error '+ err);
});
mongoose.connection.on('disconnected', function(){
	console.log('Mongoose disconnected');
});

gracefulShutdown = function (msg, callback) {
	// 
	mongoose.connection.close(function(){
		console.log('Mongoose disconnected through ' + msg);
		callback;
	});
};
//for nodemon restarts
process.once('SIGUSR2', function(){
	gracefulShutdown('nodemon restart', function(){
		process.kill(process.pid, 'SIGUSR2');
	});
});
//for app termination
process.once('SIGINT', function(){
	gracefulShutdown('app termination', function(){
		process.exit(0);
	});
});
//for heroku app termination
process.once('SIGTERM', function(){
	gracefulShutdown('Heroku app shutdown', function(){
		process.exit(0);
	});
});

// files to require

require('./locations');