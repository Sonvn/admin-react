var gulp = require('gulp');
var small = require('small').gulp; // <-- notice the '.gulp' part

gulp.task('build', function() {
    return gulp.src('src/**/*.js')
        .pipe(small("app.js", {
            includeNode: true,
            modulesDirectories: ['node_modules'],
            globalModules: {
                'react': {
                    commonjs: 'react',
                },
                'react-dom': {
                    commonjs: 'react-dom',
                }
            }
        }))
        .pipe(gulp.dest('dist'));
});