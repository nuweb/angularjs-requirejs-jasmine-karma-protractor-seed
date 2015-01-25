angular.module('login', [])

.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/app/login', {
            templateUrl: 'app/login/login.tpl.html',
            controller: 'LoginCtrl'
        });
    }
])

.controller('LoginCtrl', ['$scope', 'UserService',
    function($scope, UserService) {
        console.info('%cLogin Controller', 'color:blue');
        $scope.$emit('UPDATE_PAGE_TITLE', 'Login Page');
        //	Login Callback
        console.log($scope);
        $scope.login = function() {
            UserService.login($scope.credentials).success(function() {
                alert('Loging Success')
            }).error(function() {
                alert('Login Failure');
            });
        }
    }
])

.factory('UserService', ['$http', 'SessionService',
    function($http, SessionService) {
        var cacheSession = function() {
                SessionService.set('authenticated', true);
            },
            uncacheSession = function() {
                SessionService.unset('authenticated');
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
            logout: function() {

            },
            register: function() {

            }
        }
    }
]);