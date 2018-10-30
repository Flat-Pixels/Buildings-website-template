



(function($) {    
   // other code here    
 $(document).ready(function() {   
    $( '.nav-mobile-btn' ).on( 'click', function() {
      $( '.nav-primary' ).toggleClass( 'visible' );

      if( $( ".nav-primary" ).hasClass( "visible" ) ) {
        $('html, body').css('overflowY', 'hidden'); 
      }else {
        $('html, body').css('overflowY', 'auto'); 
      }
    }) 
  });    
})(jQuery);