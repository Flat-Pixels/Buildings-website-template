
/*
* ---------------------------------------------
* ---------------------------------------------
* ---------------------------------------------
*
* Don't touch to this file
* Unless you really know what you are doing
*
*
* ---------------------------------------------
* ---------------------------------------------
*/


/*
*
* This show and hide the site main navigation
* When the browser is a mobile one
* And toggle the overflow of the body of the page
*
*/
(function($) {  
 $(document).ready(function() {   
    $( '.nav-mobile-btn' ).on( 'click', function() {

      //Toggle whit the visibility of the mebu
      $( '.nav-primary' ).toggleClass( 'visible' );

      //Show or Hide the body ouverflow
      if( $( ".nav-primary" ).hasClass( "visible" ) ) {
        $('html, body').css('overflowY', 'hidden'); 
      }else {
        $('html, body').css('overflowY', 'auto'); 
      }
    }) 
  });    
})(jQuery);