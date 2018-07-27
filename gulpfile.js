var gulp = require('gulp');
var uncss = require('gulp-uncss');
var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
//var concat = require('gulp-concat');

gulp.task('default', function () {
  return gulp.src(['node_modules/bootstrap/dist/css/bootstrap.css', 'css/*.css'])
    // remove unused css based on html
    .pipe(uncss({ html: ['index.html'] }))
    // Auto-prefix css styles for cross browser compatibility
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    //concat into one file (not doing this as we want seperate files)
    //.pipe(concat('all.css'))
    // Minify the file
    .pipe(csso())
    // Output
    .pipe(gulp.dest('./dist'))
});