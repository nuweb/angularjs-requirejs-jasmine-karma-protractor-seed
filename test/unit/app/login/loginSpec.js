define(['login'], function() {
    var module;
    beforeEach(function() {
        module = angular.module('login');
    });
    it('login module is instantiated', function() {
        expect(module).toBeTruthy();
    });
});