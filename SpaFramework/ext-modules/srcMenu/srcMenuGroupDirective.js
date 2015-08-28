"use strict";

angular.module('srcMenu').directive('srcMenuGroup', function () {
    return {
        require: '^srcMenu',
        transclude: true,
        scope: {
            label: '@',
            icon: '@',
        },
        templateUrl: 'ext-modules/srcMenu/srcMenuGroupTemplate.html',
        link: function (scope, el, attrs, ctrl) {
            scope.isOpen = false;

            scope.isVertical = function () {
                return ctrl.isVertical() || el.parents('.src-subitem-section').length > 0;
            };

            scope.closeMenu = function () {
                scope.isOpen = false;
            };
            scope.clicked = function () {
                scope.isOpen = !scope.isOpen;
                if (el.parents('.src-subitem-section').length == 0)
                    scope.setSubmenuPosition();

                ctrl.setOpenMenuScope(scope);
            };
            scope.setSubmenuPosition = function() {
                var pos = el.offset();
                $('.src-subitem-section').css({ 'left': pos.left + 20, 'top': 36 });
            };
        },

    };
});
