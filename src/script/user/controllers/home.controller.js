(function () {
    'use strict';

    (angular
        .module('ngbool.user')
    ).controller('UserHomeCtrl', UserHomeCtrl);

    function UserHomeCtrl($log) {
        var vm = this;

        vm.init = function () {
            $log.log('Hello, ngbool!');
        };

        vm.init();
    }

})();
