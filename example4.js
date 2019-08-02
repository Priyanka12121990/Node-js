//Example 4

var fs = require('fs');

//Write,Append,Read file sync
//fs.writeFileSync('test.txt', 'Hello fs!');
//fs.appendFileSync('test.txt', 'I am fine!');
//console.log(fs.readFileSync('test.txt').toString());




//Write,Append,Read file async
fs.writeFile('test.txt', 'Create new file', function (err) {
  		if (err) throw err;
});


fs.readFile('test.txt', 'utf8', function(err, contents) {
    console.log(contents);
});


fs.appendFile('test.txt', 'Nice Words!', function (err) {
  		if (err) throw err;
  		
});