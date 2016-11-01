/* jshint node:true */
'use strict';

const sequence  = require('gulp-sequence');
const gulp      = require('gulp-folder-load')('tasks');

gulp.task('watch', () => {
    gulp.watch([ 'src/index.html'          ], [ 'prepare'                   ]);
    gulp.watch([ 'src/views/**/*.tpl.html' ], [ 'prepare:templates'         ]);
    gulp.watch([ 'bower.json'              ], [ 'prepare:wiredep'           ]);
    gulp.watch([ 'src/styles/**/*.css'     ], [ 'prepare:inject:styles'     ]);
    gulp.watch([ 'src/vendor/**/*.js'      ], [ 'prepare:inject:vendor'     ]);
    gulp.watch([ 'src/script/**/*.js'      ], [ 'prepare:inject:scripts'    ]);
});

gulp.task('default', sequence('prepare', 'watch', 'serve' ));
gulp.task('build', sequence('prepare', 'distribute'));
