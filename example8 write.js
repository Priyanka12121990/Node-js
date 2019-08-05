var fs = require("fs");
var stream;
stream = fs.createWriteStream("data.txt");

stream.write("New Tutorial on Node.js");
stream.write("New Introduction");
stream.write("New Events");
stream.write("New Generators");
stream.write("New Data Connectivity");
stream.write("New Using Jasmine");