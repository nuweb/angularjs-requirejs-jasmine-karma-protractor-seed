var jwt = require('jsonwebtoken');
var secret = require('./../config/jwt-secret');
var db = require('../config/mongodb');

exports.login = function(req, res) {
    var token;
    var email = req.body.email || '';
    var password = req.body.password || '';

    if (!email || !password) {
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

exports.register = function(req, res) {
    var email = req.body.email || '';
    var password = req.body.password || '';
    var confirmPassword = req.body.confirmPassword || '';

    if (!email || !password || !confirmPassword) {
        return res.send(400);
    }
    console.log('Trying to save email: ' + email);
    console.log('Trying to save password: ' + password);

    var user = new db.userModel();
    user.email = email;
    user.password = password;

    user.save(function(err) {
        console.log('Trying to save new user');
        if (err) {
            console.log(err);
            res.send(500);
        }
        res.send(200);
    });
};