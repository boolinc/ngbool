module.exports = (gulp) => {
    'use strict';
    const symlink = require('gulp-symlink');

    return () => {
        return (gulp
            .src([
                'src/fonts',
                'src/script',
                'src/styles',
                'src/vendor'
            ], { read: false })
        ).pipe(symlink([
            'dev/fonts',
            'dev/script',
            'dev/styles',
            'dev/vendor'
        ], { force: true }));

    };
};
