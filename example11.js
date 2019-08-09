const express = require("express");
const app = express();

app.get('/student/result/:id', function (req, res) {
  		if(req.params.id >= 100 && req.params.id <= 200){
  			res.sendFile(__dirname + '/success.html');
  		}else{
  			res.sendFile(__dirname + '/failure.html');
  		}
});

app.listen("3000", (rep) => {
});


