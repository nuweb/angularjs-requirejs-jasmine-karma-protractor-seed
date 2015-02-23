define(['login'], function() {
    describe('Login module::', function() {
        var module;
        beforeEach(function() {
            module = angular.module('login');
        });
        it('login module is instantiated', function() {
            expect(module).toBeTruthy();
        });
        describe('user should', function() {
            it('ensure server-side errors are hidden when the form submission happens ', function() {

            });
        });
    });
});