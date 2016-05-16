(function () {
    'use strict';

    (angular
        .module('', [
            'ui.router', 'templates'
        ])
        .config(Configure)
        .run(Run)
    );

    function Configure($stateProvider, $urlRouterProvider) {

        $stateProvider.state('home', {
            url: '/',
            abstract: true,
            templateUrl: 'views/home.tpl.html'
        }).state('home.index', {
            url: '',
            templateUrl: 'views/home/index.tpl.html',
            controller: 'IndexCtrl'
        });

        $urlRouterProvider.otherwise('/');
    }

    function Run() {}

})();
