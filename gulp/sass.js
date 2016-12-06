'use strict';

var path = require('path');
var autoprefixer = require('autoprefixer');
var gulpif = require('gulp-if');

module.exports = function(gulp, plugins, args, config, taskTarget, browserSync) {
  var dirs = config.directories;
  var entries = config.entries;
  var dest = path.join(taskTarget, dirs.styles.replace(/^_/, ''));
  var node_env = process.env.NODE_ENV;
  var isProd = args.production || node_env === "production"|| node_env === "staging";

  // Sass compilation
  gulp.task('sass', function() {
    gulp.src(path.join(dirs.source, dirs.styles, entries.css))
      .pipe(plugins.plumber())
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.sass({
        outputStyle: 'expanded',
        precision: 10,
        includePaths: [
          path.join(dirs.source, dirs.styles),
          path.join(dirs.source, dirs.modules)
        ]
      }).on('error', plugins.sass.logError))
      .pipe(plugins.rename(function(filepath) {
        // Remove 'source' directory as well as prefixed folder underscores
        // Ex: 'src/_styles' --> '/styles'
        filepath.dirname = filepath.dirname.replace(dirs.source, '').replace('_', '');
      }))
      .pipe(plugins.sourcemaps.write('./'))
      .pipe(gulp.dest(dest))
      .pipe(browserSync.stream({match: '**/*.css'}));
  });
};
