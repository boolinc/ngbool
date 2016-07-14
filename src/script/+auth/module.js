(function() {
    'use strict';

    angular
    .module('eCV.auth', [
        'eCV.shared',
        'LocalStorageModule', 'ui.router'
    ])
    .config(config)
    .run(run);

    function config($stateProvider, $httpProvider) {
        $httpProvider.interceptors.push('HeaderInterceptor');

        $stateProvider
        .state('login', {
            url: '/',
            templateUrl: 'views/auth/login.tpl.html',
            controller: 'AuthController',
            controllerAs: 'vm',
            data:{
                role: 4
            }
        })
        .state('logout',{
            url: '/logout',
            controller: 'LogoutController'
        });
    }

    function run($rootScope, Auth, $state) {
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams){
            if(!toState.data){
                toState.data = {role: 8};
            }

            if(toState.data.role !== 2){

                if(toState.data.role !== 4 && !Auth.userLogged()){
                    event.preventDefault();
                    if(toState.name === 'user.home'){
                        $state.go('auth');
                    }
                    else {
                        $state.go('user.home');
                    }
                }

                else if((toState.data.role === 4) && Auth.userLogged()){
                    event.preventDefault();
                    $state.go('user.home');
                }

            }

        });
    }
})();
