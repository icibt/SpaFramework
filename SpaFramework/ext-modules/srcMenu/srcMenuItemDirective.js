﻿"use strict";

angular.module('srcMenu').directive('srcMenuItem', function() {
    return {
        require: '^srcMenu',
        scope: {
            label: '@',
            icon: '@',
            route: '@'
        },
        templateUrl: 'ext-modules/srcMenu/srcMenuItemTemplate.html',
        link: function (scope, el, attr, ctrl) {

            scope.isActive = function() {
                return el === ctrl.getActiveElement();
            };

            scope.isVertical = function() {
                return ctrl.isVertical() || el.parents('.src-subitem-section').length > 0;
            };

            el.on('click', function (evt) {
                evt.stopPropagation();
                evt.preventDefault();
                scope.$apply(function() {
                    ctrl.setActiveElement(el);
                    ctrl.setRoute(scope.route);
                });
            });
        }
    };
});
