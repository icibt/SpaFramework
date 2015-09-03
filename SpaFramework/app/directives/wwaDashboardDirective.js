"use strict";

angular.module('app').directive('wwaDashboard', ['$timeout',function($timeout) {
    return {
        scope: {
            
        },
        template: '<src-dashboard></src-dashboard>',
        link: function (scope) {
            scope.title = 'Dashboard title';
            scope.gridsterOpts = {
                columns: 12,
                margins: [20, 20],
                outerMargin: false,
                pushing: true,
                floating: false,
                swapping: false
            };

            scope.widgetDefinitions = [
                {
                    title: 'Temperature',
                    settings: {
                        sizeX: 3,
                        sizeY: 3,
                        minSizeX: 2,
                        minSizeY: 2,
                        template: '<wwa-temperature></wwa-temperature>',
                        widgetSettings: {
                            id: 1000,
                            templateUrl: 'app/dialogs/wwaSelectLocationTemplate.html',
                            controller: 'wwaSelectLocationController'
                        }
                    }
                },
                {
                    title: 'Employee',
                    settings: {
                        sizeX: 3,
                        sizeY: 2,
                        template: '<wwa-employee></wwa-employee>',
                        widgetSettings: {
                            id: 5001,
                            templateUrl: 'app/dialogs/wwaSelectEmployeeTemplate.html',
                            controller: 'wwaSelectEmployeeController'
                        }
                    }
                },
                {
                    title: 'Inventory',
                    settings: {
                        sizeX: 5,
                        sizeY: 3,
                        minSizeX: 2,
                        minSizeY: 2,
                        template: '<wwa-inventory></wwa-inventory>',
                        widgetSettings: {
                            id: 1002,
                            templateUrl: 'app/dialogs/wwaSelectLocationTemplate.html',
                            controller: 'wwaSelectLocationController'
                        }
                    }
                }
            ];

            scope.widgets = [
            {
                title: 'First one',
                sizeX: 3,
                sizeY: 3,
                minSizeX: 2,
                minSizeY: 2,
                row: 0,
                col: 0,
                template: '<wwa-temperature></wwa-temperature>',
                widgetSettings: {
                    id: 1000,
                    templateUrl: 'app/dialogs/wwaSelectLocationTemplate.html',
                    controller: 'wwaSelectLocationController'
                }
            }, {
                title: 'Second',
                sizeX: 3,
                sizeY: 2,
                row: 0,
                col: 5,
                template: '<wwa-employee></wwa-employee>',
                widgetSettings: {
                    id: 5001,
                    templateUrl: 'app/dialogs/wwaSelectEmployeeTemplate.html',
                    controller: 'wwaSelectEmployeeController'
                }
            }, {
                title: 'First one',
                sizeX: 5,
                sizeY: 3,
                minSizeX: 2,
                minSizeY: 2,
                row: 5,
                col: 5,
                template: '<wwa-inventory></wwa-inventory>',
                widgetSettings: {
                    id: 1002,
                    templateUrl: 'app/dialogs/wwaSelectLocationTemplate.html',
                    controller: 'wwaSelectLocationController'
                }
            }
            ];
        }
       
    };
}]);
