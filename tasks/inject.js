module.exports = (gulp) => {
    'use strict';
    const inject = require('gulp-inject');

    return () => {
        let sources = gulp.src([
            'dev/styles/**/*.css',
            'dev/script/**/*.js'
        ], { read: false });

        return (gulp
            .src('dev/index.html')
            .pipe(inject(sources, {
                relative: true
            }))
        ).pipe(gulp.dest('dev'));

    };
};
