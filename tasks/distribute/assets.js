module.exports = (gulp) => {
    'use strict';
    const useref    = require('gulp-useref');
    const flatten   = require('gulp-flatten');
    const gulpif    = require('gulp-if');
    const minify    = require('gulp-minify');
    const minifyCss = require('gulp-minify-css');

    return () => [
        (gulp
            .src('dev/index.html')
            .pipe(useref())
            .pipe(gulpif('*.js', minify({
                ext: { src: '.debug.js', min: '.js' }, mangle: false,
                noSource: true
            })))
            .pipe(gulpif('*.css', minifyCss()))
        ).pipe(gulp.dest('www')),
        (gulp
            .src('dev/lib/**/fonts/**')
            .pipe(flatten())
        ).pipe(gulp.dest('www/fonts'))
    ];

};
