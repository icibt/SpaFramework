(function () {
    'use strict';

    angular
        .module('srcMenu')
        .controller('srcMenuController', srcMenuController);

    srcMenuController.$inject = ['$scope','$rootScope']; 

    function srcMenuController($scope,$rootScope) {
        /* jshint validthis:true */
        var vm = this;
        $scope.showMenu = true;
        $scope.isVertical = true;
        $scope.allowHorizontalToggle = true;

        vm.setActiveElement = function(el) {
            $scope.activeElement = el;
            console.log('Set active element');
        };

        vm.getActiveElement = function() {
            return $scope.activeElement;
        };

        vm.isVertical = function() {
            return $scope.isVertical;
        };

        vm.setRoute = function(route) {
            $rootScope.$broadcast('src-menu-item-selected-event',
            { route: route });
        };

        vm.setOpenMenuScope = function(scope) {
            $scope.openMenuScope = scope;
        };

        $scope.$on('src-menu-show', function(evt, data) {
            $scope.showMenu = data.show;
            $scope.isVertical = data.isVertical;
            $scope.allowHorizontalToggle = data.allowHorizontalToggle;
        });

        $scope.toggleMenuOrientation = function () {

            //close any open menus
            if ($scope.openMenuScope)
                $scope.openMenuScope.closeMenu();

            $scope.isVertical = !$scope.isVertical;
            $rootScope.$broadcast('src-menu-orientation-changed-event', { isMenuVertical: $scope.isVertical });
        };

        angular.element(document).bind('click', function(e) {
            if ($scope.openMenuScope && !$scope.isVertical) {
                if ($(e.target).parent().hasClass('src-selectable-item'))
                    return;
                $scope.$apply(function() {
                    $scope.openMenuScope.closeMenu();
                });
                e.preventDefault();
                e.stopPropagation();
            };
        });

        activate();

        function activate() { console.log('Activated Menu controller'); }
    }
})();
