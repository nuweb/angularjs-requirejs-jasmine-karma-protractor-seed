angular.module('AngularSuperhero', ['ngRoute', 'home', 'login', 'register', 'services'])

.config(['$routeProvider', '$httpProvider',
    function($routeProvider, $httpProvider) {
        $httpProvider.interceptors.push('tokenInterceptor');
        $routeProvider.otherwise({
            redirectTo: '/app/login'
        })
    }
])


.run(['$rootScope', '$location', 'sessionService',
    function($rootScope, $location, sessionService) {
        $rootScope.$on("$routeChangeStart", function(event, nextRoute, currentRoute) {
            if (!sessionService.get('token') && !sessionService.get('authenticated')) {
                console.log('User not authenticated, redirecting...');
                $location.path('/app/login');
                $rootScope.loginBtnTxt = 'Login';
            } else {
                $rootScope.loginBtnTxt = 'Logout';
            }
        });
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