module.exports = (gulp) => {
    'use strict';
    const inject = require('gulp-inject');

    return () => (gulp
        .src('dev/index.html')
        .pipe(inject(gulp.src([
            'dev/styles/**/*.css'
        ], { read: false }), {
            relative: true
        }))
    ).pipe(gulp.dest('dev'));
};
