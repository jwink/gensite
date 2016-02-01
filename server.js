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




var mon_path = 'mongodb://localhost:27017/gensite';

var mongoose = require('mongoose');
mongoose.connect(mon_path);

var Schema = mongoose.Schema;

var widgetSchema = new Schema({
  name: {type: Schema.Types.Mixed, default: {}}
});

var widgetModel = mongoose.model('widget', widgetSchema);

// var thisWidget = new widgetModel({"name": "This is a name"});
// thisWidget.save();





