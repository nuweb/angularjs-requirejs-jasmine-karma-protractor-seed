angular.module('AngularSuperhero', ['ngRoute', 'home'])

.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.otherwise({
            redirectTo: '/app/js/home'
        })
    }
])

.controller('AppCtrl', ['$scope',
    function($scope) {
        $scope.greetMe = 'World';
    }
]);