const gulp = require('gulp');
const uglify = require("gulp-uglify");
const cleanCss = require("gulp-clean-css");
const eslint = require("gulp-eslint");

const file = 'jquery.nestable';

gulp.task('default', function () {
    gulp.src(file + '.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/' + file + '.min.js'));

    gulp.src(file + '.css')
        .pipe(cleanCss())
        .pipe(gulp.dest('dist/' + file + '.min.css'));
});


gulp.task('test', function () {
    return gulp.src([file + '.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});