angular.module('AngularSuperhero', ['ngRoute', 'home', 'login', 'register', 'services'])

.config(['$routeProvider', '$httpProvider',
    function($routeProvider, $httpProvider) {
        $httpProvider.interceptors.push('tokenInterceptor');
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