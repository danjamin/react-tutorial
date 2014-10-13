var gulp = require('gulp');
var react = require('gulp-react');
var concat = require('gulp-concat');
var transpiler = require('gulp-es6-module-transpiler');
var jshint = require('gulp-jshint');
var watch = require('gulp-watch');

var config = {
  paths: {},
  patterns: {},
  src: {}
};

config.paths = {
  raw: 'app',
  build: 'build',
  dist: 'dist'
};

config.patterns = {
  jsx: '/**/*.jsx',
  js: '/**/*.js'
};

function pathFor(path) {
  return config.paths[path];
}

function sourceFor(path, pattern) {
  return pathFor(path) + config.patterns[pattern];
}

gulp.task('jsx', function() {
  return gulp.src(sourceFor('raw', 'jsx'))
    .pipe(react())
    .pipe(gulp.dest(pathFor('build')));
});

gulp.task('js', function() {
  return gulp.src(sourceFor('raw', 'js'))
    .pipe(gulp.dest(pathFor('build')));
});

gulp.task('jslint', ['js', 'jsx'], function() {
  return gulp.src(sourceFor('build', 'js'))
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('jstranspile', ['js', 'jsx'], function() {
  return gulp.src(sourceFor('build', 'js'))
    .pipe(transpiler({
      type: 'amd',
      prefix: 'app'
    }))
    .pipe(concat('deps.min.js'))
    .pipe(gulp.dest(pathFor('dist')));
});

gulp.task('watch', function() {
  gulp.watch(sourceFor('raw', 'js'), ['jslint', 'jstranspile']);
  gulp.watch(sourceFor('raw', 'jsx'), ['jslint', 'jstranspile']);
});

gulp.task('default', ['jslint', 'jstranspile', 'watch']);
