module.exports = (gulp) => {
    'use strict';
    const wiredep = require('wiredep').stream;

    return () => {
        return (gulp
            .src('dev/index.html')
            .pipe(wiredep())
        ).pipe(gulp.dest('dev'));
    };
};
