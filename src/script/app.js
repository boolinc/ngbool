(function () {
    'use strict';

    (angular
        .module('ngbool', [
            'ngbool.auth', 'ngbool.user',
            'ngMaterial', 'templates'
        ])
        .config(configure)
        .run(run)
    );

    function configure($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    }

    function run() {}

})();
