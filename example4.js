var fs = require('fs');

fs.readFile('student.js', 'utf8', function(err, data){
    if (err){
        console.log(err);
    } else {
    	obj = JSON.parse(data); //now it is an object
    	obj.student.push({"name":"sunil","age":24}); //add data
    	json = JSON.stringify(obj); //convert it back to json
    
    fs.writeFile("student.js", json , (err) => {
    	if (err) {
        	console.error(err);	
        	return;
    	};
    	console.log("Student recorded added");
	});
}});
