const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('styles', function () {
    return gulp.src('src/sass/**/*.scss').pipe(sass().on('error', sass.logError)).pipe(gulp.dest('src/css/'));
});

gulp.task('watch', function () {
    return gulp.watch('src/sass/**/*.scss', gulp.series(['styles']));
});
