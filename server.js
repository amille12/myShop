var express = require('express');
var session = require('express-session');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var productController = require('./api/controllers/productController.js');
console.log(productController);
// Node Server
var app = express();
var port = 8000;


// Middleware
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors());

//Endpoints
app.get('/api/products', productController.index);
app.get('/api/products/:id', productController.show);
app.post('/api/products', productController.create);
app.put('/api/products/:id', productController.update);
app.delete('/api/products/:id', productController.destroy);



// // // MongoDB
var mongoUri = 'mongodb://localhost:27017/ecommerce';
mongoose.connect(mongoUri);



// // Start Database
// var db = mongo('ecommerce', ['products']);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
    console.log('connected to db at ' + mongoUri)
});


// Start Server
app.listen(port, function() {
    console.log('Server listening on port ' + port);
});
