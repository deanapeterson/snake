var gulp = require('gulp');
var copy = require('gulp-copy');
var data = require('gulp-data');
var rimraf = require('gulp-rimraf');
var config = {
  dir : {
    build : 'target/'
  },
  files : {
    srcJs : [
      'src/**/*.module.js',
      'src/**/*.js'
    ]
  }
}

gulp.task('clean', function(cb){
  gulp.src(config.dir.build)
    .pipe(rimraf());
    cb();
});

gulp.task('copyJs', function(){
  return gulp.src(config.files.srcJs).pipe(
    copy(config.dir.build)
  );
});

gulp.task('generateIndex', function(){
  
})

gulp.task('build',['clean', 'copyJs']);


gulp.task('default', function() {
  // place code for your default task here
});
