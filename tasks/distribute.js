module.exports = (gulp) => {
    'use strict';
    const useref = require('gulp-useref');

    return () => {

        return (gulp
            .src('dev/index.html')
            .pipe(useref())
        ).pipe(gulp.dest('www'));
    };

};
