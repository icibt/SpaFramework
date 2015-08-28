(function () {
    'use strict';

    angular
        .module('srcFramework')
        .controller('srcFrameworkController', srcFrameworkController);

    srcFrameworkController.$inject = ['$scope','$window','$timeout','$rootScope']; 

    function srcFrameworkController($scope,$window,$timeout,$rootScope) {
        /* jshint validthis:true */
        var vm = this;
        $scope.isMenuVisible = true;
        $scope.isMenuVertical = true;

        $scope.menuButtonClicked = function() {
            $scope.isMenuVisible = !$scope.isMenuVisible;
            broadcastMenuState();
            $scope.$apply();
        };

        var broadcastMenuState = function() {
            $rootScope.$broadcast('src-menu-show', {
                show: $scope.isMenuVisible,
                isVertical: $scope.isMenuVertical,
                allowHorizontalToggle: !$scope.isMenuButtonVisible
            });
        };

        $scope.isMenuButtonVisible = true;

        $scope.$on('src-menu-item-selected-event', function (evt, data) {
            $scope.routeString = data.route;
            checkWidth();
            broadcastMenuState();
        });

        $scope.$on('src-menu-orientation-changed-event', function (evt, data) {
            $scope.isMenuVertical = data.isMenuVertical;
        });

        $($window).on('resize.srcFramework', function() {
            $scope.$apply(function() {
                checkWidth();
                broadcastMenuState();
            });
        });

        $scope.$on('$destroy', function() {
            $($window).off('resize.srcFramework');
        });

        var checkWidth = function() {
            var width = Math.max($($window).innerWidth(),$($window).width());
            $scope.isMenuVisible = (width > 768);
            $scope.isMenuButtonVisible = !$scope.isMenuVisible;
        };

        $timeout(function() {
            checkWidth();
            broadcastMenuState();
        }, 0);

        activate();

        function activate() {  }
    }
})();
