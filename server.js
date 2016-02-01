var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var fs = require('fs');

global.path = require('path');

app.use('/', express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: true}));

var port = process.env.PORT || 8080;

app.listen(port);

console.log("server is up and running");

