angular.module('AngularSuperhero', ['ngRoute', 'home', 'login', 'register'])

.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.otherwise({
            redirectTo: '/app/home'
        })
    }
])

.controller('AppCtrl', ['$scope',
    function($scope) {
        $scope.greetMe = 'World';
    }
]);