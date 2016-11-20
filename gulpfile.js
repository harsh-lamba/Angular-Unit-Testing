var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
//var jshint = require('gulp-jshint');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('js', function() {
	return browserify('./app/app.js')
		.bundle()
		.on('error', function(err){
        console.log(err.message);
    	})
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./app/target'));
});