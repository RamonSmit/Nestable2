const gulp = require('gulp');
const uglify = require("gulp-uglify");
const cleanCss = require("gulp-clean-css");
const eslint = require("gulp-eslint");
const rename = require("gulp-rename");

const file = 'jquery.nestable';

gulp.task('default', function () {
    gulp.src(file + '.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/'));

    gulp.src(file + '.css')
        .pipe(cleanCss())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/'));
});


gulp.task('test', function () {
    return gulp.src([file + '.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});