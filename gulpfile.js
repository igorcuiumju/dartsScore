var gulp         = require('gulp');
var server       = require('gulp-server-livereload');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var useref       = require('gulp-useref');
var gulpif       = require('gulp-if');
var uglify       = require('gulp-uglify');
var minifyCss    = require('gulp-csso');


//live reload
gulp.task('server', function() {
  gulp.src('app')
    .pipe(server({
      livereload: true,
      open: true
    }));
});

//sass and autoprefixer
gulp.task('sass', function () {
  return gulp.src('app/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 15 versions']
    }))
    .pipe(gulp.dest('app/css'));
});

//build
gulp.task('build', function () {
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulpif('*.css', minifyCss()))
    .pipe(gulp.dest('public'));
});

gulp.task('watch', function () {
  gulp.watch('app/sass/**/*.sass', ['sass']);
});

gulp.task('default', ['server', 'watch']);
