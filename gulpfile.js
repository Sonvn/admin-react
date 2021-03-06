var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');

gulp.task('build', function() {
    return browserify('./src/app.js')
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function () {
    gulp.watch('src/**/*.js', ['build']);
});
