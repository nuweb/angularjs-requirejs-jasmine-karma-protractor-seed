var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var expressJwt = require('express-jwt');

var secret = require('./server/config/jwt-secret');

var app = express();

app.use(express.static(__dirname + "/client"));
app.listen(8000, function() {
    console.log('Listening on port 8000');
});

app.use(bodyParser());
app.use(morgan('combined'));

app.use(expressJwt({
    secret: secret.jwtSecret
}).unless({
    path: ['/user/login']
}));

//	Routes
var routes = {};
routes.users = require('./server/routes/users.js');

app.post('/user/login', routes.users.login);