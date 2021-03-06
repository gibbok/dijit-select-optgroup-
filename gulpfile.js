/*! dijit-select-optgroup | The MIT License (MIT) | Copyright (c) 2017 GibboK */
var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('open');
var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');
var stylish = require('gulp-jscs-stylish');

gulp.task('connect', function () {
    // runs connect server
    connect.server({
        root: ""
    });
});

gulp.task('example', function () {
    // open browser
    var uri = 'http://localhost:8080/example.html';
    open(uri);
});

gulp.task('checkcode', function () {
    // validate source code using jscs and jshint
    gulp.src('.')
        .pipe(jshint())
        .pipe(jscs())
        .on('error', function () { })
        .pipe(stylish.combineWithHintResults())
        .pipe(jshint.reporter('jshint-stylish'));
});
