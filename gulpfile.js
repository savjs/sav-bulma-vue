var gulp = require('gulp-param')(require('gulp'), process.argv),
 // concat = require('gulp-concat'),
  //replace = require('gulp-replace'),
  gutil = require('gulp-util'),
 // gulpLog = require('gulp-log'),
  rimraf = require('rimraf'),
  sass = require('gulp-sass'),
  path = require('path')

var paths = {
  scss: [
    './sass/*.sass',
    
  ]
}

function handleSassError (err) {
  gutil.log(gutil.colors.red('sass error\r\n'), gutil.colors.yellow(err.message))
  this.emit('end')
}

gulp.task('del', function () {
  return rimraf('./dist/static/*.*', function () {})
})

gulp.task('sass', function () {
  return gulp.src(paths.scss)
        .pipe(sass({
            style: 'expanded',
            //includePaths: [
                //path.resolve(__dirname, './node_modules/bulma')
           // ]
        }))
        .on('error', handleSassError)
        .pipe(gulp.dest('./dist/static/css'))
        //.pipe(gulp.dest('./demo/dist/static/css'))
})


gulp.task('sass-watch', ['sass'], function () {
  gulp.watch([paths.scss], ['sass'])
})




gulp.task('build', [ 'sass'])

gulp.task('default', ['del',  'sass-watch'])
