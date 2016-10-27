(function () { /* jshint camelcase:false */ /* global CryptoJS */
    'use strict';

    (angular
        .module('eCV.shared')
        .constant('headers', {
            urlencoded: 'application/x-www-form-urlencoded',
            json: 'application/json',
            authorization: function(t, k) { return `${t} ${k}`; }
        })
        .constant('credentials', {
            client: {
                type: 'Basic',
                id: '5682223a8fddd17b5fdeda0c',
                secret: 'r/d5XRkFexAlk5oajyf03y1gt+on7WTMewQayaiHEh8='
            }
        })
        .constant(
            'tokens', {
                client: 'a942do2m4',
                user: '60dma93m9m3',
                params: '1msdfsdj23',
                redirect: '39m94m29dm'
            }
        )
        .constant(
            'access', {
                client: {
                    type: 'Basic',
                    id: '5682223a8fddd17b5fdeda0c',
                    secret: 'r/d5XRkFexAlk5oajyf03y1gt+on7WTMewQayaiHEh8='
                },

                credentials: function(){
                    return {
                        grant_type: 'password',
                        client_id: this.client.id,
                        client_secret: this.client.secret,
                        username: 'admin',
                        password: 'beuSUwCTw6cYasriBRpiLX+EuElRXM2YIFo/sl2gtic='
                    };
                },

                password: function(user, password){
                    return {
                        grant_type: 'password',
                        client_id: this.client.id,
                        client_secret: this.client.secret,
                        username: user,
                        password: CryptoJS.SHA1(password).toString()
                    };
                },

                refresh: function(refresh_token){
                    return  {
                        grant_type: 'refresh_token',
                        refresh_token: refresh_token
                    };
                }
            }
        )
    );
})();
