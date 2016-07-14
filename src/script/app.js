(function () {
    'use strict';

    (angular
        .module('eCV', [
            'eCV.auth',
            'ngMaterial', 'templates'
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
    }

})();
