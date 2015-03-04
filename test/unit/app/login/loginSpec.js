define(['login', 'services', 'angularMocks'], function() {
    describe('Login module tests:', function() {
        var module;
        beforeEach(function() {
            module = angular.module("login");
        });
        //	Test if the login module exists
        it("has been instantiated", function() {
            expect(module).toBeTruthy();
        });
    });

    describe('Login controller tests:', function() {
        var LoginCtrl,
            scope;
        beforeEach(module('login'));
        beforeEach(module('services'));

        // Initialize the controller and a mock scope
        beforeEach(inject(function($controller, $rootScope, userService, sessionService, $location) {
            scope = $rootScope.$new();
            LoginCtrl = $controller('LoginCtrl', {
                $scope: scope
            });
        }));
        it('ensure page title gets updated', function() {

        });
    });
});