var express = require('express');
var mysql = require('mysql');
var path = require('path');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
//app.engine('html', require('ejs').renderFile);


const con = mysql.createConnection({
	host: "localhost",
  	user: "root",
  	password: "",
  	database:"customers"

});

con.connect(function(err) {
    if(!err) {
    console.log("Database is connected ... nn");    
} else {
	//if (err) throw err;
    console.log("Error connecting database ... nn");    
}
});



app.get("/",function(req,res){
	con.query('SELECT * from customers', function(err, rows, fields) {
		
  		if (!err) {
    		obj = {print: rows};
            res.render('newhome', obj);
    	}
  		else
    		res.status(404).send(err);
  	});
});

app.listen("3000",(rep) => {
  console.log("rep")
});