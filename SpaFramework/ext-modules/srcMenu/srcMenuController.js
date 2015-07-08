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

        vm.setActiveElement = function(el) {
            $scope.activeElement = el;
            console.log('Set active element');
        };

        vm.getActiveElement = function() {
            return $scope.activeElement;
        };

        vm.setRoute = function(route) {
            $rootScope.$broadcast('src-menu-item-selected-event',
            { route: route });
        };

        $scope.$on('src-menu-show', function(evt, data) {
            $scope.showMenu = data.show;
        });

        activate();

        function activate() { console.log('Activated Menu controller'); }
    }
})();
