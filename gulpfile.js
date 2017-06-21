const gulp = require('gulp');
const uglify = require("gulp-uglify");
const minifyCss = require("gulp-minify-css");

gulp.task('default', function () {
    gulp.src('jquery.nestable.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/jquery.nestable.min.js'));

    gulp.src('jquery.nestable.css')
        .pipe(minifyCss())
        .pipe(gulp.dest('dist/jquery.nestable.min.css'));
});
