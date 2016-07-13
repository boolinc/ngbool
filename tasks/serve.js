module.exports = (gulp) => {
    'use strict';
    const   server  = require('browser-sync')
    ,       spa     = require('browser-sync-spa');

    return () => {
        server.use(spa({
            selector: '[ng-app]'
        }));

        server.init({
            server: {
                baseDir: 'dev'
            },
            startPath: 'index.html',
            ghostMode: false,
            notify: false,
            debounce: 200,
            port: 8000
        });

        gulp.watch('dev/index.html').on('change', server.reload);
    };
};
