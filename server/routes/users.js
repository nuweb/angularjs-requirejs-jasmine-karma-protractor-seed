var jwt = require('jsonwebtoken');
var secret = require('./../config/jwt-secret');
var db = require('../config/mongodb');

exports.login = function(req, res) {
    var token;
    var email = req.body.email || '';
    var password = req.body.password || '';

    if (!email || !password) {
        console.log('return 400');
        return res.send(400); //  Bad request
    }

    db.userModel.findOne({
        email: email
    }, function(err, user) {
        if (err) {
            console.log(err);
            return res.send(401);
        }
        if (!user) {
            return res.send(401);
        }
        user.comparePassword(password, function(isMatch) {
            if (!isMatch) {
                console.log('Attempt to login with ' + user.email + ' failed!');
                return res.send(401);
            }
            //  sign the secret for a token
            token = jwt.sign({
                email: email
            }, secret.jwtSecret);

            //  respond with a token
            return res.json({
                token: token
            });
        });
    });
};

exports.logout = function(req, res) {};

exports.register = function(req, res) {

};