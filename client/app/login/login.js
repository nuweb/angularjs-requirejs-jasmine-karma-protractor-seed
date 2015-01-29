'use strict';

angular.module('login', [])

.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/app/login', {
            templateUrl: 'app/login/login.tpl.html',
            controller: 'LoginCtrl',
            needsAuth: false
        });
    }
])

.controller('LoginCtrl', ['$scope', 'userService', 'sessionService', '$location',
    function($scope, userService, sessionService, $location) {
        console.info('%cLogin Controller', 'color:blue');
        $scope.$emit('UPDATE_PAGE_TITLE', 'Login Page');
        //	Login Callback
        $scope.login = function() {
            $scope.submitted = true;
            if ($scope.loginForm.$invalid && $scope.submitted) {
                console.log('Login form is invalid');
                console.log($scope.loginForm.password.$error);
                return;
            }
            userService.login($scope.credentials).success(function(data, status, headers, config) {
                sessionService.set('token', data.token);
                $location.path('/app/home');
            }).error(function() {
                //  TODO: show error messages
                $scope.submitted = false;
            });
        }
    }
])

.factory('userService', ['$http', 'sessionService',
    function($http, sessionService) {
        var cacheSession = function() {
                sessionService.set('authenticated', true);
            },
            uncacheSession = function() {
                sessionService.unset('authenticated');
                sessionService.unset('token');
            };
        return {
            login: function(credentials) {
                var login = $http.post('/user/login', {
                    email: credentials.email,
                    password: credentials.password
                });
                login.success(cacheSession);
                login.error(uncacheSession);
                return login;
            },
            register: function() {

            }
        }
    }
]);