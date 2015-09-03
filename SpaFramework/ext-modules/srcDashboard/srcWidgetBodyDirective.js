"use strict";

angular.module('srcDashboard').directive('srcWidgetBody', [
    '$compile','$modal', function($compile,$modal) {
        return {
            templateUrl: 'ext-modules/srcDashboard/srcWidgetBodyTemplate.html',
            link: function(scope, element, attrs) {
                var newElement = angular.element(scope.item.template);
                element.append(newElement);
                $compile(newElement)(scope);

                scope.close = function() {
                    scope.widgets.splice(scope.widgets.indexOf(scope.item), 1);
                };

                scope.settings = function() {
                    var options = {
                        templateUrl: scope.item.widgetSettings.templateUrl,
                        controller: scope.item.widgetSettings.controller,
                        scope: scope
                    };
                    console.log(scope.item);
                    $modal.open(options);
                };

                scope.iconClicked = function () {
                    console.log('noooo');
                    //empty body
                    //this function is used by ng-click in the template
                    //so that icon clicks aren't intercepted by widgets
                };
            }
        };
    }
]);