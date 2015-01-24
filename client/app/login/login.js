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
            UserService.login($scope.credentials).success(function() {}).error(function() {});
        }
    }
])

.factory('UserService', ['$http',
    function($http) {
        return {
            login: function(credentials) {
                return $http.post('/user/login', {
                    email: credentials.email,
                    password: credentials.password
                });
            },
            logout: function() {

            },
            register: function() {

            }
        }
    }
]);