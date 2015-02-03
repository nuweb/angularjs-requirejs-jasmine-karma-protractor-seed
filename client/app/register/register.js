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

.controller('RegisterCtrl', ['$scope',
    function($scope) {
        console.info('%cRegister Controller', 'color:blue');
        $scope.$emit('UPDATE_PAGE_TITLE', 'Register Page');
        $scope.register = function() {
            $scope.submitted = true;
            if ($scope.registerForm.$invalid) {
                console.log('Register form is invalid');
                return;
            }

        };
    }
])

.factory('registerService', ['$http', 'sessionService',
    function($http, $sessionService) {
        return {
            register: function(credentials) {

            }
        }
    }
]);