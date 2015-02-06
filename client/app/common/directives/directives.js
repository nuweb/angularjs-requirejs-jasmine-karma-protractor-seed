angular.module('directives', [])

.directive('alerts', function() {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'app/common/directives/alerts.html',
        link: function(scope, elm, attrs, ctrl) {
            scope.alertDisplay = 'hide';
        }
    };
});