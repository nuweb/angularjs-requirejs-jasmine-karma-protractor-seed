define(['login'], function() {
    describe('Login module::', function() {
        var module;
        beforeEach(function() {
            module = angular.module('login');
        });
        it('login module is instantiated', function() {
            expect(module).toBeTruthy();
        });
    });
    describe('Login controller tests', function() {
        var $scope, ctrl;
        beforeEach(module('login'));

        beforeEach(inject(function($rootScope, $controller) {
            $scope = $rootScope.$new();
            ctrl = $controller('LoginCtrl', {
                $scope: $scope
            });
        }));
    });
});