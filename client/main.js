requirejs.config({
    paths: {
        angular: 'bower_components/angular/angular',
        angularRoute: 'bower_components/angular-route/angular-route',
        jquery: 'bower_components/jquery/dist/jquery.min',
        bootstrap: 'bower_components/bootstrap/dist/js/bootstrap.min'
    },
    shim: {
        'angularRoute': {
            deps: ['angular']
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'app/home/home': {
            deps: ['app']
        },
        'app': {
            deps: ['angular', 'angularRoute', 'bootstrap']
        }
    }
});

require([
    'app/home/home'
], function() {
    return angular.element(document).ready(function() {
        angular.bootstrap(document, ['AngularSuperhero']);
    });
});