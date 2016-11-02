(function() {
    'use strict';

    (angular
        .module('ngbool.auth')
    ).service('Auth', Auth);

    Auth.$inject = [
        '$http', '$httpParamSerializerJQLike', 'api', 'headers', 'tokens', 'access', 'localStorageService'
    ];

    /* @ngInject */
    function Auth(
        $http, $httpParamSerializerJQLike, api, headers, tokens, access, localStorageService
    ) {

        this.password = password;
        this.login = login;
        this.logout = logout;
        this.userLogged = userLogged;
        this.setClient = setClient;
        this.client = client;

        function password(username, password) {
            return $http({
                method: 'post',
                url: api.token,
                headers: {
                    'Content-Type': headers.urlencoded,
                },
                data: $httpParamSerializerJQLike(access.password(username, password)),
                dontAuth: true
            }).then(function(data){
                return data.data;
            });
        }

        function login(user) {
            localStorageService.set(
                CryptoJS.SHA1(tokens.user).toString(), user
            );
        }

        function logout() {
            localStorageService.remove(
                CryptoJS.SHA1(tokens.user).toString()
            );
        }

        function userLogged() {
            return localStorageService.get(
                CryptoJS.SHA1(tokens.user).toString()
            );
        }

        function setClient(client) {
            localStorageService.set(
                CryptoJS.SHA1(tokens.client).toString(), client
            );
        }

        function client() {
            return localStorageService.get(
                CryptoJS.SHA1(tokens.client).toString()
            );
        }
    }
})();
