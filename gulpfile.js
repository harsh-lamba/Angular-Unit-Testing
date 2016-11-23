var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var jshint = require('gulp-jshint');
var connect = require('gulp-connect');

// Grouper task which compiles other tasks asynchronously. For synchronous
// behavior use npm module 'run-sequence'
gulp.task('default', ['jshint', 'js', 'watch', 'connect']);

// Browserify
gulp.task('js', function() {
	return browserify('./app/app.js')
		.bundle()
		.on('error', function(err){
        console.log(err.message);
    	})
		.pipe(source('bundle.js'))
		//.pipe(streamify(uglify())) // Getting application error
		.pipe(gulp.dest('./app/target'))
		.pipe(connect.reload());
});

// Enables livereload for *.html
gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

//Code Linting
gulp.task('jshint', function() {
	return gulp.src('./app/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

// Sass
gulp.task('sass', function() {
	// ToDo
});

// Watchify
gulp.task('watch', function() {
	gulp.watch('app/*.js', ['jshint', 'js']);
	gulp.watch('app/*.html', ['html']);

});

//Live Reload
gulp.task('connect', function() {
	connect.server({
	root: ['app'],
	livereload: true,
	port: 3000
});
});
