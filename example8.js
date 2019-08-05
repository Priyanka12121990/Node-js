var fs = require("fs");
var stream;
stream = fs.createReadStream("data.txt");
streamwr = fs.createWriteStream("data.txt");

stream.on("data", function(data) {
    var displaydata = data.toString();
    console.log(displaydata);
}); 


streamwr.write("New Tutorial on Node.js");
streamwr.write("New Introduction");
streamwr.write("New Events");
streamwr.write("New Generators");
streamwr.write("New Data Connectivity");
streamwr.write("New Using Jasmine");