(function() {
    'use strict';

    (angular
        .module('ngbool.user', [
            'ngbool.shared',
            'LocalStorageModule', 'ui.router'
        ])
        .config(config)
    ).run(run);

    function config($stateProvider, $httpProvider) {
        $httpProvider.interceptors.push('HeaderInterceptor');

        $stateProvider.state('user', {
            url: '/',
            abstract: true,
            template: '<ui-view>'
        }).state('user.home', {
            url: '',
            templateUrl: 'views/user/home.tpl.html',
            controller: 'UserHomeCtrl',
            controllerAs: 'UserHome'
        }).state('user.index', {
            url: '/index.html',
            templateUrl: 'views/user/home.tpl.html',
            controller: 'UserHomeCtrl',
            controllerAs: 'UserHome'
        });
    }

    function run() {}
})();
