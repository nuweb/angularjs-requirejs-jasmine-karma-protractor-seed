var allTestFiles = [];
var TEST_REGEXP = /(spec|Spec|test)\.js$/i;

var pathToModule = function(path) {
    return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
    if (TEST_REGEXP.test(file)) {
        // Normalize paths to RequireJS module names.
        allTestFiles.push(pathToModule(file));
    }
});

require.config({
    // Karma serves files under /base, which is the basePath from your config file
    baseUrl: '/base',

    paths: {
        'angular': 'client/bower_components/angular/angular',
        'angularResource': 'client/bower_components/angular-resource/angular-resource',
        'angularMocks': 'client/bower_components/angular-mocks/angular-mocks',
        'angularRoute': 'client/bower_components/angular-route/angular-route',
        'app': 'client/app',
        'home': 'client/app/home/home',
        'login': 'client/app/login/login',
        'register': 'client/app/register/register',
        'directives': 'client/app/common/directives/directives',
        'services': 'client/app/common/services/services'
    },
    // dynamically load all test files
    deps: allTestFiles,

    // we have to kickoff jasmine, as it is asynchronous
    callback: window.__karma__.start
});