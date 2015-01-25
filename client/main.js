requirejs.config({
    paths: {
        angular: 'bower_components/angular/angular',
        angularRoute: 'bower_components/angular-route/angular-route',
        jquery: 'bower_components/jquery/dist/jquery.min',
        bootstrap: 'bower_components/bootstrap/dist/js/bootstrap.min',
        homepage: 'app/home/home',
        loginpage: 'app/login/login',
        registerpage: 'app/register/register',
        services: 'app/common/services/services'
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
        'registerpage': {
            deps: ['app']
        },
        'services': {
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
    'registerpage',
    'services'
], function() {
    return angular.element(document).ready(function() {
        angular.bootstrap(document, ['AngularSuperhero']);
    });
});