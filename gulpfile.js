var gulp = require('gulp'),
    browserSync = require('browser-sync');
  
gulp.task('browser-sync', function () {
  var files = [
    '*.html',
    'css/**/*.css',
    'less/**/*.less',
    'img/**/*.png',
    'js/**/*.js'
  ];
  
  browserSync.init(files, {
    server: {
      baseDir: './'
    }
  });
});