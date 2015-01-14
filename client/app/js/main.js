requirejs.config({
    paths: {
        angular: '/client/bower_components/angular/angular',
        angularRoute: '/client/bower_components/angular-route/angular-route',
        jquery: '/client/bower_components/jquery/dist/jquery.min',
        bootstrap: '/client/bower_components/bootstrap/dist/js/bootstrap.min'
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

require([
    'app'
], function() {
    return angular.element(document).ready(function() {
        angular.bootstrap(document, ['App']);
    });
});