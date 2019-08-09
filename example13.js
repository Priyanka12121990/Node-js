const express = require("express");
const app = express();

app.get('/show', function (req, res) {
  	res.status(200).send({"id" : req.query.id,"name": req.query.name});
})

app.get("*", (req, res) => {
     	res.status(404).send( {"Message": "invalid information"});
});
	
app.listen("3000",(rep) => {
});


