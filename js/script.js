$(document).ready(function() {
	
    $( '#previous' ).click(function( e ){
    	e.preventDefault();
    	console.log("gwapo ko");
});

      $( '#next' ).click(function( e ){
    	e.preventDefault();
    	console.log("gwapo cya");
    	console.log($( '.activeSlide' ).next());
    	if($( '.activeSlide' ).next().length === 0 ){
    		//check if there is next element, if length = 0, back to 1st <li> 
    		$('.slideImg > li:first-child').addClass( 'activeSlide' ).removeClass('inactiveSlide').show();
    		$( '.slideImg > li:last-child' ).removeClass( 'activeSlide' ).addClass("inactiveSlide").hide();
    	}else {
    		$( '.activeSlide' ).next().addClass( 'activeSlide' ).removeClass("inactiveSlide").show();
    		$( '.activeSlide' ).prev().removeClass( 'activeSlide' ).addClass("inactiveSlide").hide();
    	}
    });
});


	
  