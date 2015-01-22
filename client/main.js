requirejs.config({
    paths: {
        angular: 'bower_components/angular/angular',
        angularRoute: 'bower_components/angular-route/angular-route',
        jquery: 'bower_components/jquery/dist/jquery.min',
        bootstrap: 'bower_components/bootstrap/dist/js/bootstrap.min',
        homepage: 'app/home/home',
        loginpage: 'app/login/login'
    },
    shim: {
        'angularRoute': {
            deps: ['angular']
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'homepage': {
            deps: ['app']
        },
        'loginpage': {
            deps: ['app']
        },
        'app': {
            deps: ['angular', 'angularRoute', 'bootstrap']
        }
    }
});

require([
    'homepage',
    'loginpage',
], function() {
    return angular.element(document).ready(function() {
        angular.bootstrap(document, ['AngularSuperhero']);
    });
});