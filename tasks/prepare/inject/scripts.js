module.exports = (gulp) => {
    'use strict';
    const inject = require('gulp-inject');
    const sort   = require('gulp-angular-filesort');

    return () => (gulp
        .src('dev/index.html')
        .pipe(inject(gulp.src([
            'dev/script/**/*.js'
        ]).pipe(sort()), {
            relative: true
        }))
    ).pipe(gulp.dest('dev'));
};
