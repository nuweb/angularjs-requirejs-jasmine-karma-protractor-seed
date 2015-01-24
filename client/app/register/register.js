angular.module('register', [])

.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/app/register', {
            templateUrl: 'app/register/register.tpl.html',
            controller: 'RegisterCtrl'
        });
    }
])

.controller('RegisterCtrl', ['$scope',
    function($scope) {
        console.info('%cRegister Controller', 'color:blue');
        $scope.$emit('UPDATE_PAGE_TITLE', 'Register Page');
    }
]);