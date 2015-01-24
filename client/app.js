angular.module('AngularSuperhero', ['ngRoute', 'home', 'login', 'register'])

.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.otherwise({
            redirectTo: '/app/login'
        })
    }
])

.controller('AppCtrl', ['$scope',
    function($scope) {
        $scope.greeting = 'Welcome';
        $scope.docTitle = 'AngularSuperhero';
        $scope.$on('UPDATE_PAGE_TITLE', function(event, message) {
            $scope.docTitle = message || 'AngularSuperhero';
        });
    }
]);