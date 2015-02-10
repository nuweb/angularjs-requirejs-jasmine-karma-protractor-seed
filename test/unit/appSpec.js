define(['app'], function() {
    describe('App module tests', function() {
        var appModule, appDependencies;
        beforeEach(function() {
            appModule = angular.module("AngularSuperhero");
            //  list/array of modules which the injector will load before the app module is loaded
            appDependencies = appModule.requires;
        });
        //  test if the application module has been initialized correctly
        it("AngularSuperhero module initialized", function() {
            expect(appModule).toBeTruthy();
        });

        describe('App module dependencies tests', function() {
            var hasModule = function(module) {
                return appDependencies.indexOf(module) > -1;
            }
            it('should have ngRoute as a dependency', function() {
                expect(hasModule('ngRoute')).toBeTruthy();
            });
            it('should have home as a dependency', function() {
                expect(hasModule('home')).toBeTruthy();
            });
            it('should have login as a dependency', function() {
                expect(hasModule('login')).toBeTruthy();
            });
            it('should have register as a dependency', function() {
                expect(hasModule('register')).toBeTruthy();
            });
            it('should have services as a dependency', function() {
                expect(hasModule('services')).toBeTruthy();
            });
            it('should have directives as a dependency', function() {
                expect(hasModule('directives')).toBeTruthy();
            });
        });
    });
});