module.exports = (gulp) => {
    'use strict';
    const templateCache = require('gulp-angular-templatecache');

    return () => {
        return (gulp
            .src('src/views/**/*.tpl.html')
            .pipe(templateCache({
                root: 'views/',
                standalone: true
            }))
        ).pipe(gulp.dest('src/script/templates'));
    };
};
