(function () {
    'use strict';

    var apiRouter = {
        url: {
            protocol: 'https',
            host: 'ecv-api.herokuapp.com'
        },
        route: function(path){
            var url = this.url;
            return `${url.protocol}://${url.host}/${path}`;
        },
        id: function(path){
            var prePath = apiRouter.route(path);
            return function (id) {
                return `${prePath}/${id}`;
            };
        }
    };

    var api = {
        host: apiRouter.url.host,
        id: apiRouter.id,
        // Auth
        token: apiRouter.route('auth/token'),
    };

    (angular
        .module('eCV.shared')
        .constant('api', api)
    );

})();
