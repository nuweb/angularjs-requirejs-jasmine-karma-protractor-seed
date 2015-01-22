var restify = require('restify');
var server = restify.createServer({
    name: 'forms',
    version: '1.0.0'
});

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get(/.*/, restify.serveStatic({
    directory: './client', // indicates current working directory
    default: "index.html"
}));

server.listen(8000, function() {
    console.log('%s listening at %s', server.name, server.url);
});