const express = require("express");
var bodyParser = require('body-parser');
var formidableMiddleware = require('express-formidable');

const app = express();
app.use(bodyParser.json()); //json raw
app.use(bodyParser.urlencoded({ extended: true })); // encoding
app.use(formidableMiddleware());

app.post('/', (req, res) => {
  res.send(req.body);
  //res.send(req.body.foo);

})

app.post('/form', (req, res) => {
  //req.fields; // contains non-file fields
  //req.files; // contains files
  res.send(req.fields);
});

app.listen("3000", (rep) => {
  console.log("server connected");
});
