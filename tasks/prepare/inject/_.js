module.exports = () => {
    'use strict';
    const sequence = require('gulp-sequence');

    return done => sequence(
        'prepare:inject:styles',
        'prepare:inject:vendor',
        'prepare:inject:scripts'
    )(done);
};
