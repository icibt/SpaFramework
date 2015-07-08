"use strict";

angular.module('srcMenu').directive('srcMenu', function() {
    return {
        scope: {
            
        },
        transclude: true,
        templateUrl: 'ext-modules/srcMenu/srcMenuTemplate.html',
        controller: 'srcMenuController',
        link: function(scope, el, attr) {
            
        }
    };
});
