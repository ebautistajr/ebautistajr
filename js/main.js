/*
 * Added for div show when visible in the browser
 * 
 */
jQuery(function($) {

  var _oldShow = $.fn.show;

  $.fn.show = function(speed, oldCallback) {
    return $(this).each(function() {
      var obj         = $(this),
          newCallback = function() {
            if ($.isFunction(oldCallback)) {
              oldCallback.apply(obj);
            }
            obj.trigger('afterShow');
          };

      // you can trigger a before show if you want
      obj.trigger('beforeShow');

      // now use the old function to show the element passing the new callback
      _oldShow.apply(obj, [speed, newCallback]);
    });
  }
});

/**
 * Parallax Scrolling Tutorial
 * For NetTuts+
 *  
 * Author: Mohiuddin Parekh
 *	http://www.mohi.me
 * 	@mohiuddinparekh   
 */


$(document).ready(function(){
	// Cache the Window object
	$window = $(window);
                
   $('section[data-type="background"]').each(function(){
     var $bgobj = $(this); // assigning the object
                    
      $(window).scroll(function() {
                    
		// Scroll the background at var speed
		// the yPos is a negative value because we're scrolling it UP!								
		//var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
		var yPos = -( ($window.scrollTop() - $bgobj.offset().top) / $bgobj.data('speed'));
		// Put together our final background position
		var coords = '50% '+ yPos + 'px';

		// Move the background
		$bgobj.css({ backgroundPosition: coords });
                
               // $('#gateway-title').waypoint(function(direction) {
                //    $('#gateway-title').fadeIn("slow").show();
                //});                
                //$('#co-creation').waypoint(function() {
                //    $('#co-creation').show( 'slide', { direction: "down" } , 500);
                //}, {
                //    offset: '100%'
                //});         
                if($("#gateway-innovation-container").is(":within-viewport")){
                    $('#gateway-title').fadeIn('2000').show();
					$('#gateway-title').addClass('animated bounceOutLeft');
                    $("#co-creation").fadeIn("fast",function(){
                        $("#outousrcing").fadeIn("fast",function(){
                             $("#multilingual").fadeIn("fast",function(){
                                 
                                 //$('#gateway-title').fadeIn("fast").show();
                             }).show();
                        }).show();
                    }).show();
                }
                
        }); // window scroll Ends
/*		var txt = $('.msg').text();
		var flag=0;
        $('.msg').scrambledWriter();

		setInterval(function (){
			if(flag==0){
				$('.msg').text("I do web development, mobile development and System Analysis and Design.");
				flag = 1;
			}else{
				$('.msg').text(txt);
				flag = 0;
			}
			$('.msg').typewriter();;
			
             //something you want delayed

         }, 15000); // how long do you want the delay to be? 	
*/		
        $('#mainlogo').addClass(' animated fadeInUp');
		$('.msg').addClass(' animated fadeInDown');
		$("#mainlogo").delay(5000).animate({
            marginTop: '15%'
        }, 1000);
		$('#about').addClass(' animated fadeInUp');
		$('#portfolio').addClass(' animated fadeInUp');
		$('#contact').addClass(' animated fadeInUp');
    });	

}); 


/* 
 * Create HTML5 elements for IE's sake
 */

document.createElement("article");
document.createElement("section");