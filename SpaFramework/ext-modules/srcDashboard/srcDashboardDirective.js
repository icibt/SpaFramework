(function() {
    'use strict';

    angular
        .module('srcDashboard').directive("srcDashboard", srcDashboardDirective);

    function srcDashboardDirective() {
        return {
            templateUrl: "ext-modules/srcDashboard/srcDashboardTemplate.html",
            link: function(scope, element, attrs) {
                scope.addNewWidget = function(widget) {
                    var newWidget = angular.copy(widget.settings);
                    console.log(widget.settings);
                    scope.widgets.push(newWidget);
                };
            }
        };
    }
})();