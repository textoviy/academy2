var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var less        = require('gulp-less');
var concatCss   = require('gulp-concat-css');
var csso        = require('gulp-csso');
var autoprefixer = require('gulp-autoprefixer');
var rename      = require('gulp-rename');
var minifyCss      = require('gulp-clean-css');
// var autoprefixer = require('gulp-autoprefixer');
var files = [
    '*.html',
    'css/**/*.css',
    'less/**/*.less',
    'img/**/*.png',
    'js/**/*.js'
  ];
// для правильной работы не забудьте подключить плагины к своему проекту

// Компилируем Less при помощи плагина gulp-less 
gulp.task('less', function() {
    return gulp.src("less/style.less") // находим все less файлы в папке less 
        .pipe(less()) // собственно компилируем их
        .pipe(csso()) // если нужно - сжимаем css код (если не нужно, строчку можно удалить)
        .pipe(autoprefixer())
        .pipe(concatCss('style.css'))
        //.pipe(rename())
        .pipe(minifyCss())
        .pipe(rename("style.min.css"))
         // при желании можно объединить все в один css-файл 
        .pipe(gulp.dest("css")) // выгружаем файлы в папку app в раздел css 
        .pipe(browserSync.stream()); // при желании можно обновить browser-sync после изменений
});

// Настраиваем сервер browser-sync для отслеживания изменений в проекте 
gulp.task('serve', ['less'], function() {
    // Запускаем сервер и указываем за какой папкой нужно следить 
    browserSync.init(files, {
        server: {
      baseDir: './'
    }
    });
    gulp.watch("less/**/*.less", ['less']); // следим за изменениями less файлов и сразу запускаем таск less 
    gulp.watch("*.html").on('change', browserSync.reload); // запускаем перезагрузку страницы при изменениях html 
});


gulp.task('default', ['serve']); // делаем это стандартным таском
