'use strict';

var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );

sass.compiler = require( 'node-sass' );


gulp.task( 'sass', function(){
  return gulp.src( './assets/styles/scss/**/*.scss' )
    .pipe( sass.sync( {outputStyle: 'expanded'} ).on( 'error', sass.logError ) )
    .pipe( gulp.dest( './assets/styles' ) );
});

gulp.task( 'sass:watch', function() {
  gulp.watch( './assets/styles/scss/**/*.scss', [ 'sass' ] )
})

gulp.task( 'default', [ 'sass:watch' ], function(){
  //Do nothing here...
});