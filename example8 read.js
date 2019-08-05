var fs = require("fs");
var stream;
stream = fs.createReadStream("data.txt");


stream.on("data", function(data) {
    var displaydata = data.toString();
    console.log(displaydata);
}); 
