angular.module('login', [])

.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/app/login', {
            templateUrl: 'app/login/login.tpl.html',
            controller: 'LoginCtrl'
        });
    }
])

.controller('LoginCtrl', ['$scope',
    function($scope) {
        console.info('%cLogin Controller', 'color:blue');
        $scope.docTitle = 'Login page'
    }
]);