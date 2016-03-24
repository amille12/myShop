var express = require('express');
var session = require('express-session');
var cors = require('cors');
var mongojs = require('mongojs');
var bodyParser = require('body-parser');

var app = express();
var port = 8000;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors());

var db = mongojs('myshop', ['product']);

















app.listen(port, function() {
    console.log('Server listening on port ' + port);
});
