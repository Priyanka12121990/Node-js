const express = require("express");
const app = express();

var student_data = {
  "students": [
    {
      "ID": "1",
      "Name": "Senpai",
      "Gender": "1",
      "Class": "32",
      "Age": "15"
    },
    {
      "ID": "2",
      "Name": "Yui Rio",
      "Gender": "0",
      "Class": "11",
      "Age": "14"
    },
    {
      "ID": "3",
      "Name": "Yuna Hina",
      "Gender": "0",
      "Class": "12",
      "Age": "14"
    },
    {
      "ID": "4",
      "Name": "Koharu Hinata",
      "Gender": "0",
      "Class": "21",
      "Age": "20"
    },
    {
      "ID": "5",
      "Name": "Mei Mio",
      "Gender": "0",
      "Class": "22",
      "Age": "09"
    }
  ]
};


app.get('/', (req, res) => {
  if(req.headers.auth == "mobiotics") {
  	  res.send(req.headers);
  	} else {
  		res.status(401).send("not valid")
  	}

})

app.get('/students', (req, res) => {
	if(req.headers.auth == "mobiotics") {
  	  	res.send(student_data);
  	} else {
  		res.status(401).send("not valid")
  	}
});

app.get('/students/:id', (req, res) => {
	if(req.headers.auth == "mobiotics") {
  	  	var studentArray = student_data.students;
  	  	for (var i = 0; i < studentArray.length; i++) {
  	  		if (studentArray[i].ID == req.params.id) {
  	  			res.send(studentArray[i]);
  	  		}
  	  	}
  	} else {
  		res.status(401).send("not valid");
  	}
});

app.get('/student', (req, res) => {
	if(req.headers.auth == "mobiotics") {
  	  	var studentArray = student_data.students;
  	  	
  	  	for (var i = 0; i < studentArray.length; i++) {
  	  		 if (studentArray[i].Name == req.query.name) {
  	  		 	res.send(studentArray[i]);
  	  		 }
  	  	}
  	} else {
  		res.status(401).send("not valid")
  	}
});

app.get('/students/:lower_age/:higher_age', (req, res) => {
	if(req.headers.auth == "mobiotics") {
  	  	var studentArray = student_data.students;
  	  	newStudentArray = [];
  	  	for (var i = 0; i < studentArray.length; i++) {
                                                                                          	  		
  	  		if(studentArray[i].Age >= req.params.lower_age || studentArray[i].Age <= req.params.higher_age){
  	  			newStudentArray.push(studentArray[i]);
  	  		}
  	  	}
  	  	res.send({"students":newStudentArray});
  	} else {
  		res.status(401).send("not valid");
  	}
});

app.get("*",(req,res)=>{
     	res.status(404).send( {"Message": "invalid information"});
});
	


app.listen(3000,(rep) => {
  
});