module.exports = () => {
    'use strict';
    const sequence = require('gulp-sequence');

    return done => sequence('distribute:assets', 'distribute:copy')(done);
};
