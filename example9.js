var fs = require("fs");

fs.readFile('file1data.txt', 'utf8', function(err1, data1) {
    fs.readFile('file2data.txt', 'utf8', function(err2, data2) {
            if(err1 || err2) {
                   throw new Error();
            }
 	    let data = data1+data2;
            fs.writeFile("file3.txt", data, (err) => {
    		if (err) {
        		console.error(err);	
        		return;
    		};
    		console.log("2 file data added into a single file");
	    });
     });
});
