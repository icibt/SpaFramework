(function () {
    'use strict';

    angular
        .module('srcFramework')
        .controller('srcFrameworkController', srcFrameworkController);

    srcFrameworkController.$inject = ['$scope']; 

    function srcFrameworkController($scope) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'srcFrameworkController';

        activate();

        function activate() { }
    }
})();
