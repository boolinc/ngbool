(function () {
    'use strict';

    var apiRouter = {
        url: {
            protocol: 'https',
            host: 'api.example.com'
        },
        route: function(path){
            var url = this.url;
            return '{0}://{1}/{2}'.format(url.protocol, url.host, path);
        },
        id: function(path){
            var prePath = apiRouter.route(path);
            return function (id) {
                return '{0}/{1}'.format(prePath, id);
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
        .module('ngbool.shared')
        .constant('api', api)
    );

})();
