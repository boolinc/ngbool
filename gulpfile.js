/* jshint node:true */
'use strict';

var sequence    = require('gulp-sequence')
,   gulp        = require('gulp-folder-load')('tasks');

gulp.task('prepare', (done) => {
    sequence([ 'index', 'symlink' ], 'templates', 'wiredep', 'inject')(done);
});

gulp.task('watch', () => {
    gulp.watch([ 'src/index.html' ], [ 'prepare' ]);
    gulp.watch([
        'src/**/*.js',
        'src/**/*.css'
    ], [ 'inject' ]);
    gulp.watch([ 'src/views/**/*.tpl.html' ], [ 'templates' ]);
    gulp.watch([ 'bower.json' ], [ 'wiredep' ]);
});

gulp.task('build', sequence('prepare', 'distribute'));

gulp.task('default', [ 'prepare', 'watch' ]);
