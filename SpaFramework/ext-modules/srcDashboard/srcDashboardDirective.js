(function() {
    'use strict';

    angular
        .module('srcDashboard').directive("srcDashboard", srcDashboardDirective);

    function srcDashboardDirective() {
        return {
            templateUrl: "ext-modules/srcDashboard/srcDashboardTemplate.html",
        };
    }
})();