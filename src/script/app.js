(function () {
    'use strict';

    (angular
        .module('eCV', [
            'eCV.auth',
            'ui.router', 'ngMaterial', 'templates'
        ])
        .config(configure)
        .run(run)
    );

    function configure($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    }

    run.$inject = ['$rootScope', '$state'];

    function run($rootScope, $state ) {
        $rootScope.$on('$stateChangeStart', function(evt, to, params) {
            if (to.redirectTo) {
                evt.preventDefault();
                $state.go(to.redirectTo, params, {location: 'replace'});
            }
        });
    }

})();
