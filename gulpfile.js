const uglify = require("gulp-uglify");
const cleanCss = require("gulp-clean-css");
const eslint = require("gulp-eslint");
const rename = require("gulp-rename");
const sass = require('gulp-sass');

const { series, parallel, src, dest } = require('gulp');
const file = 'jquery.nestable';

function javascript (cb) {
  src(file + '.js')
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(dest('dist/'));
  cb();
}

function sassTask (cb) {
  src(file + '.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('.'))
  cb();
}

function css (cb) {
  src(file + '.css')
    .pipe(cleanCss())
    .pipe(rename({suffix: '.min'}))
    .pipe(dest('dist/'));
  cb();
};

function test (cb) {
  src([file + '.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
  cb();
}

function clean(cb) {
  // body omitted
  cb();
}

const build = parallel(series(sassTask, css), javascript)
  
exports.test = test;
exports.build = build;
exports.default = series(clean, build);