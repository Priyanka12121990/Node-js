var fs = require('fs');
var events = require('events');
var eventEmitter = new events.EventEmitter();

var filemsg = function(){
	console.log("Your file reading is completed");
}

fs.readFile('test.txt', 'utf8', function(err, contents) {
    console.log(contents);
    eventEmitter.emit('scream');
});


//eventEmitter.addListener('scream', filemsg);
eventEmitter.on('scream', filemsg);



    
