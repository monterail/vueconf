'use strict';

var fs = require('fs');
var path = require('path');
var foldero = require('foldero');
var jade = require('jade');
var yaml = require('js-yaml');
var indexify = require('gulp-indexify');
var gulpif = require('gulp-if');

module.exports = function(gulp, plugins, args, config, taskTarget, browserSync) {
  var dirs = config.directories;
  var dest = path.join(taskTarget);
  var dataPath = path.join(dirs.source, dirs.data);
  var node_env = process.env.NODE_ENV;
  var isProd = args.production || node_env === "production"|| node_env === "staging";

  // Jade template compile
  gulp.task('jade', function() {
    var siteData = {};
    if (fs.existsSync(dataPath)) {
      // Convert directory to JS Object
      siteData = foldero(dataPath, {
        recurse: true,
        whitelist: '(.*/)*.+\.(json|ya?ml)$',
        loader: function loadAsString(file) {
          var json = {};
          try {
            if (path.extname(file).match(/^.ya?ml$/)) {
              json = yaml.safeLoad(fs.readFileSync(file, 'utf8'));
            }
            else {
              json = JSON.parse(fs.readFileSync(file, 'utf8'));
            }
          }
          catch(e) {
            console.log('Error Parsing JSON file: ' + file);
            console.log('==== Details Below ====');
            console.log(e);
          }
          return json;
        }
      });
    }

    // Add --debug option to your gulp task to view
    // what data is being loaded into your templates
    if (args.debug) {
      console.log('==== DEBUG: site.data being injected to templates ====');
      console.log(siteData);
      console.log('\n==== DEBUG: package.json config being injected to templates ====');
      console.log(config);
    }

    var condition = function(file) {
      return !/404.html$/.test(file.path);
    };

    return gulp.src([
      path.join(dirs.source, '**/*.jade'),
      '!' + path.join(dirs.source, '{**/\_*,**/\_*/**' + (isProd ? ',uikit/**/*}':'}'))
    ])
    .pipe(plugins.changed(dest))
    .pipe(plugins.plumber())
    .pipe(plugins.jade({
      jade: jade,
      pretty: true,
      locals: {
        config: config,
        debug: true,
        env: process.env.NODE_ENV || "development",
        site: {
          data: siteData
        },
        siteUrl: config[process.env.NODE_ENV || "development"].url
      }
    }))
    .pipe(plugins.htmlmin({
      collapseBooleanAttributes: true,
      conservativeCollapse: true,
      removeCommentsFromCDATA: true,
      removeEmptyAttributes: true,
      removeRedundantAttributes: true
    }))
    .pipe(gulpif(condition, indexify()))
    .pipe(gulp.dest(dest))
    .on('end', browserSync.reload);
  });
};
