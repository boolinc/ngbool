module.exports = (gulp) => {
    'use strict';
    const symlink = require('gulp-symlink');

    return () => {
        return (gulp
            .src([
                'src/styles',
                'src/script'
            ], { read: false })
        ).pipe(symlink([
            'dev/styles',
            'dev/script'
        ], { force: true }));

    };
};
