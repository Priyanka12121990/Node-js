const express = require("express");
const app = express();


app.get('/flight/:sourcecity-:destinationcity', function (req, res) {
		if(req.params.sourcecity == "" && req.params.destinationcity == ""){
			res.status(404).send( {"Message": "invalid information"});
		} else {
			res.status(200).send({"source" : req.params.sourcecity,"destination": req.params.destinationcity});
		}
});


app.get("*",(req,res)=>{
     	res.status(404).send( {"Message": "invalid information"});
});
	


app.listen(3000,(rep) => {
  
});


