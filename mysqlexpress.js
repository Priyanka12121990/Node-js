const express = require("express");
var mysql = require('mysql');
const app = express();

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

//example a
app.get("/", function(req, res) {
	con.query('SELECT * from customers', function(err, rows, fields) {
		res.set({
			'Access-Control-Allow-Origin': "*"
			'Content-Type':"application/json"
		})
		
  		if (!err) {
    			console.log('The result data is: ', rows);
    			res.send(rows)
    			//res.render("index", { rows: rows });
		}else{
    			//console.log('Error while performing Query.');
    			res.status(404).send(err);
		}
  	});
});


//example b
app.get("/id", function(req, res) {
	const sql = 'SELECT * from customers where customerNumber=?';
	const data = [119];
	con.query(sql, data, function(err, rows, fields) {
  		if (!err)
    			res.send(rows)
  		else
    			res.status(404).send(err);
  	});
});


//example c
app.get("/between", function(req, res) {
	const sql = 'SELECT * from customers where customerNumber between ? and ?';
	const data = [121,130];
	con.query(sql, data, function(err, rows, fields) {
  		if (!err)
    			res.send(rows)
  		else
    			res.status(404).send(err);
  	});
});

//example d
app.get("/or", function(req, res) {
	const sql = 'SELECT * from customers where country=? OR country=?';
	const data = ["USA","UK"];
	con.query(sql, data, function(err, rows, fields) {
  		if (!err)
    			res.send(rows)
  		else
    			res.status(404).send(err);
  	});
});


//example e
app.get("/insert", function(req, res) {
	const sql = 'INSERT INTO `customers`(`customerNumber`, `customerName`, `contactLastName`, `contactFirstName`, `phone`, `addressLine1`, `addressLine2`, `city`, `state`, `postalCode`, `country`, `salesRepEmployeeNumber`, `creditLimit`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)';
	const data = ["497","newuser","newuserlastname","newuserfirstname","123456789","add1","add2","Nagpur","Maharashtra","443354","India","173","50000"];
	con.query(sql, data, function(err, rows, fields) {
  		if (!err)
    			res.send("Data inserted successfully")
  		else
    			res.status(404).send(err);
  	});
});

//example e
app.get("/delete", function(req, res) {
	const sql = 'Delete from customers where customerNumber=?';
	const data = [487];
	con.query(sql, data, function(err, rows, fields) {
  		if (!err)
    			res.send("Data deleted successfully")
  		else
    			res.status(404).send(err);
  	});
});

 

//example f
app.get("/secondmax", function(req, res) {
	const sql = 'SELECT `customerNumber`, `customerName`, `contactLastName`, `contactFirstName`, `phone`, `addressLine1`, `addressLine2`, `city`, `state`, `postalCode`, `country`, `salesRepEmployeeNumber`, max(creditLimit) from customers where creditLimit < (SELECT MAX(creditLimit) FROM customers)';
	con.query(sql, function(err, rows, fields) {
  		if (!err)
    			res.send(rows)
  		else
    			res.status(404).send(err);
  	});
});
//module.exports = con;

app.listen("3000", (rep) => {
	console.log("rep")
});
