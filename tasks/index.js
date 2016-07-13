module.exports = (gulp) => {
    'use strict';

    return () => {
        return (gulp
            .src('src/index.html')
        ).pipe(gulp.dest('dev'));

    };
};
