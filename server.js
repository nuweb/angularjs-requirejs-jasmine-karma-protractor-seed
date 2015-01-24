var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();

app.use(express.static(__dirname + "/client"));
app.listen(8000, function() {
    console.log('Listening on port 8000');
});

app.use(bodyParser());
app.use(morgan());

//	Routes
var routes = {};
routes.users = require('./server/routes/users.js');

app.post('/user/login', routes.users.login);