'use strict';

angular.module('register', [])

.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/app/register', {
            templateUrl: 'app/register/register.tpl.html',
            controller: 'RegisterCtrl',
            needsAuth: false
        });
    }
])

.controller('RegisterCtrl', ['$scope', 'registerService', 'sessionService', '$location',
    function($scope, registerService, sessionService, $location) {
        console.info('%cRegister Controller', 'color:blue');
        $scope.$emit('UPDATE_PAGE_TITLE', 'Register Page');
        $scope.register = function() {
            $scope.submitted = true;
            if ($scope.registerForm.$invalid) {
                console.log('Register form is invalid');
                return;
            }
            registerService.register($scope.credentials).success(function(data, status, headers, config) {
                sessionService.set('token', data.token);
                $location.path('/app/home');
            }).error(function() {
                $scope.submitted = false;
            });
        };
    }
])

.factory('registerService', ['$http', 'sessionService', 'cacheService',
    function($http, $sessionService, cacheService) {
        return {
            register: function(credentials) {
                var register = $http.post('/user/register', {
                    email: credentials.email,
                    password: credentials.password,
                    confirmPassword: credentials.confirmPassword
                });
                register.success(cacheService.cache);
                register.error(cacheService.uncache);
                return register;
            }
        }
    }
]);