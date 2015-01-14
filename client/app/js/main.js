requirejs.config({
    paths: {
        angular: '../bower_components/angular/angular',
        angularRoute: '../bower_components/angular-route/angular-route',
        jquery: '../bower_components/jquery/dist/jquery.min',
        bootstrap: '../bower_components/bootstrap/dist/bootstrap.min'
    },
    shim: {
        'angularRoute': {
            deps: ['angular']
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'app': {
            deps: ['angular', 'angularRoute', 'bootstrap']
        }
    }
});