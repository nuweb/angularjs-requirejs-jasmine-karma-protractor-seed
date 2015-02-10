define(['app'], function() {
    describe('Module tests', function() {
        var appModule;
        beforeEach(function() {
            appModule = angular.module("AngularSuperhero");
        });
        //  Test if the application module has been initialized correctly
        it("AngularSuperhero module initialized", function() {
            expect(appModule).toBeTruthy();
        });
    });
});