exports.login = function(req, res) {
    var user = {
        email: 'abcd@gmail.com',
        password: '111111'
    };
    var email = req.body.email || '';
    var password = req.body.password || '';
    console.log(email);
    console.log(password);
    if (!email || !password) {
        console.log('return 400');
        return res.send(400);
    }
    if (email !== user.email || password !== user.password) {
        return res.send(401);
    }
    return res.json({
        email: email
    });
};

exports.logout = function(req, res) {};

exports.register = function(req, res) {

};