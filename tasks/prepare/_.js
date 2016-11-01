module.exports = () => {
    'use strict';
    const sequence = require('gulp-sequence');

    return done => (
        sequence('prepare:symlink', 'prepare:templates', 'prepare:index')(done)
    );
};
