(function() {
    'use strict';

    (angular
        .module('ngbool.auth')
    ).controller('LogoutController', LogoutController);

    LogoutController.$inject = ['Auth', '$state'];

    /* @ngInject */
    function LogoutController(Auth, $state) {
        var vm = this;

        activate();

        function activate() {
            Auth.logout();
            $state.go('login');
        }
    }
})();
