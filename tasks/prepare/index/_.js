module.exports = () => {
    'use strict';
    const sequence = require('gulp-sequence');

    return done => sequence(
        'prepare:index:copy', 'prepare:wiredep', 'prepare:inject'
    )(done);
};
