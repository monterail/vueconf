'use strict';

var path = require('path');
var gulpif = require('gulp-if');
var pngquant = require('imagemin-pngquant');

module.exports = function(gulp, plugins, args, config, taskTarget, browserSync) {
  var dirs = config.directories;
  var dest = path.join(taskTarget, dirs.images.replace(/^_/, ''));
  var node_env = process.env.NODE_ENV;
  var isProd = args.production || node_env === "production"|| node_env === "staging";

  // Imagecopy - for manual compression of PNG and JPG
  gulp.task('imagecopy', function() {
    return gulp.src(path.join(dirs.source, dirs.images, '**/*.{jpg,jpeg,gif,png,svg}'))
      .pipe(plugins.changed(dest))
      .pipe(gulp.dest(dest));
  });

// Imagemin for svg compression
gulp.task('imagemin', function() {
  return gulp.src(path.join(dirs.source, dirs.images, '**/*.svg'))
    .pipe(plugins.changed(dest))
    .pipe(gulpif(isProd, plugins.imagemin({
      svgoPlugins: [{removeViewBox: false}]
    })))
    .pipe(gulp.dest(dest));
});
};
