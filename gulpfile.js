'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('min', () => {
  gulp.src([
    './node_modules/core-js/client/shim.min.js',
    './node_modules/zone.js/zone.min.js',
    './node_modules/reflect-metadata/Reflect.js',
    './node_modules/rxjs/bundles/Rx.umd.min.js',
    './node_modules/angular2/bundles/angular2-polyfills.min.js',
    './node_modules/angular2/bundles/angular2-all.umd.min.js',
  ])
    .pipe(sourcemaps.init())
    .pipe(concat('ame.min.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist'));
});

// Same, but with either full or 'dev' versions
gulp.task('dev', () => {
  gulp.src([
    './node_modules/core-js/client/shim.js',
    './node_modules/zone.js/zone.js',
    './node_modules/reflect-metadata/Reflect.js',
    './node_modules/rxjs/bundles/Rx.umd.js',
    './node_modules/angular2/bundles/angular2-polyfills.js',
    './node_modules/angular2/bundles/angular2-all.umd.dev.js',
  ])
    .pipe(sourcemaps.init())
    .pipe(concat('ame.dev.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist'));
});

// Full versions
gulp.task('fullfat', () => {
  gulp.src([
    './node_modules/core-js/client/shim.js',
    './node_modules/zone.js/zone.js',
    './node_modules/reflect-metadata/Reflect.js',
    './node_modules/rxjs/bundles/Rx.umd.js',
    './node_modules/angular2/bundles/angular2-polyfills.js',
    './node_modules/angular2/bundles/angular2-all.umd.js',
  ])
    .pipe(sourcemaps.init())
    .pipe(concat('ame.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['min', 'dev', 'fullfat']);
