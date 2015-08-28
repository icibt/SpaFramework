"use strict";

angular.module('srcMenu').directive('srcMenu', ['$timeout',function($timeout) {
    return {
        scope: {
            
        },
        transclude: true,
        templateUrl: 'ext-modules/srcMenu/srcMenuTemplate.html',
        controller: 'srcMenuController',
        link: function(scope, el, attr) {
            var item = el.find('.src-selectable-item:first');
            $timeout(function() {
                item.trigger('click');
            });
        }
    };
}]);
