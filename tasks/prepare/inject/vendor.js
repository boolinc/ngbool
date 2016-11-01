module.exports = (gulp) => {
    'use strict';
    const inject = require('gulp-inject');

    return () => (gulp
        .src('dev/index.html')
        .pipe(inject(gulp.src([
            'dev/vendor/**/*.js'
        ], { read: false }), {
            relative: true,
            name: 'vendor'
        }))
    ).pipe(gulp.dest('dev'));
};
