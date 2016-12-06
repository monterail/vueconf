'use strict';

var path = require('path');
var gulp = require('gulp');
var serve = require('gulp-serve');
var auth = require('basic-auth');
var gulpLoadPlugins = require('gulp-load-plugins');
var browserSyncLib = require('browser-sync');
var pjson = require('./package.json');
var minimist = require('minimist');
var wrench = require('wrench');
var sitemap = require('gulp-sitemap');

// Load all gulp plugins based on their names
// EX: gulp-copy -> copy
var plugins = gulpLoadPlugins();

var config = pjson.config;
var args = minimist(process.argv.slice(2));
var dirs = config.directories;
var node_env = process.env.NODE_ENV;
var taskTarget = (args.production || node_env === "production"|| node_env === "staging") ? dirs.destination : dirs.temporary;

// Create a new browserSync instance
var browserSync = browserSyncLib.create();

// This will grab all js in the `gulp` directory
// in order to load all gulp tasks
wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return (/\.(js)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file)(gulp, plugins, args, config, taskTarget, browserSync);
});

// Default task
gulp.task('default', ['clean'], function() {
  gulp.start('build');
});

gulp.task('prod', ['build', 'prod-serve']);

gulp.task('prod-serve', serve({
  root: [taskTarget],
  port: process.env.PORT || args.port
}));

gulp.task('sitemap', ['jade'], function () {
  gulp.src(taskTarget+'/**/*.html')
    .pipe(sitemap({
      siteUrl: config[process.env.NODE_ENV || "development"].url
    }))
    .pipe(gulp.dest(taskTarget));
});

// Build production-ready code
gulp.task('build', [
  'copy',
  'imagecopy',
  'sitemap',
  'jade',
  'sass'
]);

// Server tasks with watch
gulp.task('serve', [
  'imagecopy',
  'copy',
  'jade',
  'sass',
  'browserify',
  'browserSync',
  'watch'
]);
