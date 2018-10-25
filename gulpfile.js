'use strict';

var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );
var browserSync = require('browser-sync').create();

sass.compiler = require( 'node-sass' );


/*
* Task that compile the sass files
*/
gulp.task( 'sass', function(){
  return gulp.src( './assets/styles/scss/**/*.scss' )
    .pipe( sass.sync( {outputStyle: 'expanded'} ).on( 'error', sass.logError ) )
    .pipe( gulp.dest( './assets/styles' ) )
    .pipe(browserSync.stream());
});


/*
* Task that watch all sass files
* Call the task to compile them
* Wacth the html files changes and reload the whole page
*/
gulp.task( 'watch', function() {
  gulp.watch( './assets/styles/scss/**/*.scss', [ 'sass' ] );
  gulp.watch( './**/*.html').on( 'change', browserSync.reload );
});

/*
* Default task
*/
gulp.task( 'default', [ 'watch' ], function(){

  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
});