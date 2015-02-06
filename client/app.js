'use strict';

angular.module('AngularSuperhero', ['ngRoute', 'home', 'login', 'register', 'services', 'directives'])

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
            var needsAuth = (nextRoute && nextRoute.needsAuth);
            if (!sessionService.get('token') && !sessionService.get('authenticated')) {
                if (needsAuth) {
                    console.log('User not authenticated, redirecting...');
                    $location.path('/app/login');
                }
                $rootScope.loginBtnTxt = 'Log in';
            } else {
                $rootScope.loginBtnTxt = 'Logout';
            }
        });
    }
])

.controller('AppCtrl', ['$scope', 'sessionService',
    function($scope, sessionService) {
        $scope.greeting = 'Welcome';
        $scope.docTitle = 'AngularSuperhero';
        $scope.$on('UPDATE_PAGE_TITLE', function(event, message) {
            $scope.docTitle = message || 'AngularSuperhero';
        });
        $scope.logout = function() {
            sessionService.unset('authenticated');
            sessionService.unset('token');
        };
    }
]);