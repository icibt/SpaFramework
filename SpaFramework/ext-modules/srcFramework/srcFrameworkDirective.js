(function() {
    'use strict';

    angular
        .module('srcFramework').directive("srcFramework", srcFrameworkDirective);

    function srcFrameworkDirective() {
        return {
            transclude: true,
            scope: {
                title: '@',
                subtitle: '@',
                iconFile: '@'
            },
            controller: "srcFrameworkController",
            templateUrl: "ext-modules/srcFramework/srcFrameworkTemplate.html",
        };
    }
})();