angular.module('home', [])

.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/app/js/home', {
            templateUrl: 'app/js/home/home.tpl.html',
            controller: 'HomeCtrl'
        });
    }
])

.controller('HomeCtrl', ['$scope',
    function($scope) {
        $scope.docTitle = 'Angular Apps homepage';
    }
]);