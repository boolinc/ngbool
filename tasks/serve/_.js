module.exports = (gulp) => {
    'use strict';
    const server = require('browser-sync');
    const spa    = require('browser-sync-spa');
    const path   = require('path');
    const url    = require('url');
    const fs     = require('fs');

    // The default file if the file/path is not found
    let defaultFile = "index.html";

    /**
     * I had to resolve to the previous folder, because this task lives inside a
     * ./tasks folder
     * If that's not your case, just use `__dirname`
     */
    let folder = path.resolve(__dirname, '../../', 'dev');

    return () => {
        server.use(spa({
            selector: '[ng-app]'
        }));

        server.init({
            server: {
                baseDir: 'dev',
                middleware: function(req, res, next) {
                    let fileName = url.parse(req.url);
                    fileName = fileName.href.split(fileName.search).join('');

                    let fileExists = fs.existsSync(folder + fileName);
                    if (
                        !fileExists &&
                        fileName.indexOf('browser-sync-client') < 0
                    ) {
                        req.url = `/${defaultFile}`;
                    }
                    return next();
                }
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
