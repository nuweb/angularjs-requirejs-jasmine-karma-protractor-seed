angular.module('home', [])

.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/app/home', {
            templateUrl: 'app/home/home.tpl.html',
            controller: 'HomeCtrl'
        });
    }
])

.controller('HomeCtrl', ['$scope',
    function($scope) {
        $scope.docTitle = 'Angular Apps homepage';
    }
]);