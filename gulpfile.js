'use strict';

var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );
var browserSync = require('browser-sync').create();
var clean = require('gulp-clean');
var autoprefixer = require('gulp-autoprefixer');

var imagemin = require( 'gulp-imagemin' );

sass.compiler = require( 'node-sass' );

/*
* Task that compile the sass files
*/
gulp.task( 'sass', function(){
  return gulp.src( './assets/styles/scss/**/*.scss' )
    .pipe( sass.sync( {outputStyle: 'expanded'} ).on( 'error', sass.logError ) )
    .pipe( autoprefixer( { flexbox: true, cascade: false, browsers: [ 'last 2 versions' ] } ) )
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
* Clean the old buil process
*/
gulp.task( 'clean-build', function() {
  return gulp.src( './build', {read: false})
        .pipe(clean());
});


/*
* Task that build the project without sass
*/
gulp.task( 'build', [ 'clean-build', 'sass' ], function() {

  var sass_folder = 'base_sass';
  var css_folder = 'base_css';
  
  //Optimize all images before build
  gulp.src( 'assets/img/*' )
      .pipe( imagemin(
        [imagemin.jpegtran({progressive: true})]
      ))
      .pipe( gulp.dest( 'build/' + css_folder + '/assets/img' ) )
      .pipe( gulp.dest( 'build/' + sass_folder + '/assets/img' ) );

  //Build without sass
  gulp.src(
    [
      '**/*.html',
      'assets/**/*',
      '!assets/img/',
      '!assets/img/**',
      '!assets/styles/scss/',
      '!assets/styles/scss/**',
      '!node_modules/**/*',
    ], { base: './' } )
        .pipe( gulp.dest( './build/' + css_folder ) )
        .pipe( gulp.dest( './build/' + sass_folder ) );

  //Build with sass
  return gulp.src(
    [
      'assets/styles/scss/**/*'
    ], { base: './' } )
        .pipe( gulp.dest( './build/' + sass_folder ) );
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