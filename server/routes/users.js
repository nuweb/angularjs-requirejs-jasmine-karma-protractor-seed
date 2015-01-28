var jwt = require('jsonwebtoken');
var secret = require('./../config/jwt-secret');
var db = require('../config/mongodb');

exports.login = function(req, res) {
    var user = {
        email: 'abcd@gmail.com',
        password: '111111'
    };
    var token;
    var email = req.body.email || '';
    var password = req.body.password || '';

    if (!email || !password) {
        console.log('return 400');
        return res.send(400); //  Bad request
    }
    if (email !== user.email || password !== user.password) {
        return res.send(401); //  Unauthorized request
    }

    //	sign the secret for a token
    token = jwt.sign({
        email: email
    }, secret.jwtSecret);

    //	respond with a token
    return res.json({
        token: token
    });
};

exports.logout = function(req, res) {};

exports.register = function(req, res) {

};