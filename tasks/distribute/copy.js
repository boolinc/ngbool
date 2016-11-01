module.exports = (gulp) => {
    'use strict';

    return () => [
        (gulp
            .src('src/data/**')
        ).pipe(gulp.dest('www/data')),
        (gulp
            .src('src/fonts/**')
        ).pipe(gulp.dest('www/fonts')),
        (gulp
            .src('src/img/**')
        ).pipe(gulp.dest('www/img'))
    ];
};
