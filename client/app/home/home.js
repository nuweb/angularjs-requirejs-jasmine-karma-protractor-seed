'use strict';

angular.module('home', [])

.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/app/home', {
            templateUrl: 'app/home/home.tpl.html',
            controller: 'HomeCtrl',
            needsAuth: true
        });
    }
])

.controller('HomeCtrl', ['$scope',
    function($scope) {
        console.info('%cHome Controller', 'color:blue');
        $scope.docTitle = 'Home page';
    }
]);