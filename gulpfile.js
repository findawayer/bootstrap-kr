'use strict';

// Node.js modules ----------------------------------

const fs = require('fs');

// Gulp modules -------------------------------------

const gulp = require('gulp');
const pump = require('pump');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const header = require('gulp-header');
const replace = require('gulp-replace');
const rename = require('gulp-rename');

// Configs ------------------------------------------

const banner = fs.readFileSync('banner.txt', 'utf8');
const cleanCSSConfig = require('./clean-css.json');

// Tasks --------------------------------------------

gulp.task('compile:sass', cb => {
  pump([
    gulp.src('scss/bootstrap.scss'),
    sourcemaps.init(),
    sass({
      outputStyle: 'nested',
      precision: 5,
      sourceMap: true
    }),
    autoprefixer(),
    header(banner),
    replace(/([\s\S]+)@charset (.*?);/m, '@charset $2;\n\n$1'),
    sourcemaps.write('./'), // output as a separate file
    gulp.dest('dist/css')
  ], cb);
});

gulp.task('minify:css', cb => {
  pump([
    gulp.src([
      'dist/css/*.css',
      '!dist/css/*.min.css'
    ]),
    cleanCSS(cleanCSSConfig),
    rename(function(path) {
      path.extname = '.min.css';
    }),
    gulp.dest('dist/css')
  ], cb);
});

// Build HTML/CSS/JS files altogether
gulp.task('build', [
  'compile:sass',
  'minify:css'
]);

// watch
gulp.task('watch', ['build'], () => {
  gulp.watch(['scss/**/*.scss'], ['compile:sass', 'minify:css']);
});

// when hitting `gulp` in CLI
gulp.task('default', ['build']);
