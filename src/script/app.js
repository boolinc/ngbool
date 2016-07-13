(function () {
    'use strict';

    (angular
        .module('eCV', [
            'ui.router', 'ngMaterial', 'templates'
        ])
        .config(Configure)
        .run(Run)
    );

    function Configure($stateProvider, $urlRouterProvider, $locationProvider) {

        $stateProvider
        .state('home', {
            url: '/',
            abstract: true,
            templateUrl: 'views/home.tpl.html',
            redirectTo: 'login'
        })
        .state('home.index', {
            url: '',
            templateUrl: 'views/home/index.tpl.html',
            controller: 'IndexCtrl',
            redirectTo: 'login'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'views/login/index.tpl.html'
        })
        .state('signup', {
            url: '/signup',
            templateUrl: 'views/signup/index.tpl.html'
        });

        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    }

    Run.$inject = ['$rootScope', '$state'];

    function Run($rootScope, $state ) {
        $rootScope.$on('$stateChangeStart', function(evt, to, params) {
            if (to.redirectTo) {
                evt.preventDefault();
                $state.go(to.redirectTo, params, {location: 'replace'});
            }
        });
    }

})();
