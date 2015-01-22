angular.module('AngularSuperhero', ['ngRoute', 'home'])

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