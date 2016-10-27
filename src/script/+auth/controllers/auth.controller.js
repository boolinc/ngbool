(function() {
    'use strict';

    angular
        .module('eCV.auth')
        .controller('AuthController', AuthController);

    AuthController.$inject = ['Auth', '$state'];

    /* @ngInject */
    function AuthController(Auth, $state) {
        var vm = this;

        vm.login = login;

        function login(user) {
            user.mail = user.mail.toLowerCase();

            Auth.password(user.mail, user.password).then(function(data){
                Auth.login(data);
                $state.go('user.stores');
            }).catch(function(error){});
        }
    }
})();
