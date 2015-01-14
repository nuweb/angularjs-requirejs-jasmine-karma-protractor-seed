angular.module('App', [])

.controller('AppCtrl', ['$scope',
    function($scope) {
        $scope.greetMe = 'World';
    }
]);