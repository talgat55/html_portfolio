jQuery(function(){
	"use strict"; 
 
 InitHeightPreloadbg();
 
}); 
//---------------------
// Height Preload BG
//----------------------
function InitHeightPreloadbg(){
	"use strict"; 
	if(jQuery('#preloader-page-loading').length){
		var heightw  = jQuery(window).height();
		jQuery('#preloader-page-loading').css('height', heightw - 70);
		jQuery(window).on('load', function () {
			"use strict"; 
			jQuery('#preloader-page-loading').hide(); 
		}); 
	}
}
// ---------------------------------------------------------
// !!!!!!!!!!!!!!!!!document ready!!!!!!!!!!!!!!!!!!!!!!!!!!
// ---------------------------------------------------------

jQuery(document).ready(function(){
	"use strict"; 

InitSearch(); 
backToTop();  
InitPortfolioRows();  
InitFilterPortfolio();  
InitDisplayLeftMenu();
InitDisplayAddInfAnimation();
InitCounter();
InitScroll();  

// end redy function
});

 jQuery(window).load(function(){
	"use strict";  	 
	
InitAnimationPosts();

});
 

//------------------
//     Rows Portfolio
//-------------------
 		var repeatportfolioinit = setTimeout(function(){
			InitPortfolioRows();
			clearTimeout(repeatportfolioinit);
		},400); 
function InitPortfolioRows(){
	"use strict";
	
	if(jQuery('.isotope').length){  
			var windwidth = jQuery(window).width();
			/*
					if(windwidth < 1600){
						jQuery('.isotope').css('width', windwidth);
					}
				*/
				jQuery('.isotope').waitForImages(function() {
				jQuery('.isotope').isotope({  
				  itemSelector : '.portfolio-item' ,  
				  masonry: {
							 columnWidth: '.first-rows'
					}				  
				});
			  });  
                            jQuery(window).resize(function() {
                                jQuery('.isotope').isotope('layout');
                            });
	}
}  

// ---------------------------------------------------------
//  Bg
// --------------------------------------------------------- 
function InitScroll(){
	"use strict"; 
	if(jQuery('div[data-type="background"]').length){
		var bgwindowwidth = jQuery(window).width();
		if(bgwindowwidth > 1020){
			var $objWindow = jQuery(window);
			jQuery('div[data-type="background"]').each(function(){
				var $bgObj = jQuery(this);
				jQuery(window).scroll(function() {
					var yPos = -($objWindow.scrollTop() / $bgObj.data('speed'));
					var coords =  yPos + 'px';
					$bgObj.css({ top: coords });

				});
			});
		} 
		 
		
	}
}
//---------------------
// Counter
//----------------------
function InitCounter(){
	"use strict"; 
	if(jQuery('.counter').length){
	   
			jQuery('.counter').each(function() {
				jQuery(this).appear(function() {
					jQuery(this).countTo();
				 
				},{accX: 0, accY: -50});
			});
	}
}
// ---------------------------------------------------------
// Animation Fade In Up
// --------------------------------------------------------- 
function InitAnimationPosts(){
	"use strict";
	if(jQuery(".over-portfolio-item").length){
		jQuery(".over-portfolio-item").viewportChecker({
			classToAdd: " animated fadeInUp",   //portfoliovisible
			offset: 50    
		}); 
	}
} 

// ---------------------------------------------------------
// Animation Portfolio
// --------------------------------------------------------- 
function InitDisplayAddInfAnimation(){
	"use strict";
	if(jQuery(".overlay-link").length){
		 
			  
			jQuery(".overlay-link").click(function(){
				var $thisblock = jQuery(this); 
				if ( $thisblock.parents('.over-portfolio-item').find('.overlay-text,.overlay-text-center').hasClass('one') ) { 
					var redychooseblock = '.container-grid';
				}else if( $thisblock.parents('.over-portfolio-item').find('.overlay-text, .overlay-text-center').hasClass('two')){ 
					var redychooseblock = '.container-grid-two';
					
				}else if( $thisblock.parents('.over-portfolio-item').find('.overlay-text, .overlay-text-center').hasClass('tree')){ 
					var redychooseblock = '.container-grid-tree';
					
				}else if( $thisblock.parents('.over-portfolio-item').find('.overlay-text, .overlay-text-center').hasClass('four')){ 
					var redychooseblock = '.container-grid-four';
					
				}else if( $thisblock.parents('.over-portfolio-item').find('.overlay-text, .overlay-text-center').hasClass('five')){ 
					var redychooseblock = '.container-grid-five';
					
				}else if( $thisblock.parents('.over-portfolio-item').find('.overlay-text, .overlay-text-center').hasClass('six')){ 
					var redychooseblock = '.container-grid-six';
					
				}else if( $thisblock.parents('.over-portfolio-item').find('.overlay-text, .overlay-text-center').hasClass('seven')){ 
					var redychooseblock = '.container-grid-seven';
					
				}else if( $thisblock.parents('.over-portfolio-item').find('.overlay-text, .overlay-text-center').hasClass('eight')){ 
					var redychooseblock = '.container-grid-eight';
					
				}else if( $thisblock.parents('.over-portfolio-item').find('.overlay-text, .overlay-text-center').hasClass('nine')){ 
					var redychooseblock = '.container-grid-nine';
					
				}else if( $thisblock.parents('.over-portfolio-item').find('.overlay-text, .overlay-text-center').hasClass('ten')){ 
					var redychooseblock = '.container-grid-ten';
					
				}else if( $thisblock.parents('.over-portfolio-item').find('.overlay-text, .overlay-text-center').hasClass('eleven')){ 
					var redychooseblock = '.container-grid-eleven';
					
				}else if( $thisblock.parents('.over-portfolio-item').find('.overlay-text, .overlay-text-center').hasClass('twelve')){ 
					var redychooseblock = '.container-grid-twelve';
					
				} 	
					
					$thisblock.parents('.over-portfolio-item').find('.overlay-text').addClass('hidden-content');
					
					var hideconentimg = setTimeout(function(){
						$thisblock.parents('.over-portfolio-item').find('img').addClass('hidden-content');
						clearTimeout(hideconentimg);
					},400);
					$thisblock.parents('.over-portfolio-item').find('.loader-overlay').fadeIn();
					var startaimationloading = setTimeout(function(){
						$thisblock.parents('.over-portfolio-item').find('.loader-overlay-before').css({ width: $thisblock.width()/10*4});
						/*jQuery('body').addClass('add-body' + ' left-body');*/
						
						clearTimeout(startaimationloading);
					},900);
					var starttransition = setTimeout(function(){  
						
						jQuery('.container-grids').removeClass('right-push' ); 
						jQuery('.container-grids').addClass('left-push'); 
						 
						clearTimeout(starttransition);
					},2000);
					var starttransitionw = setTimeout(function(){  
						jQuery('body').addClass('hide-scroll'); 
						clearTimeout(starttransitionw);
					},2600);	
					
					
					
					jQuery(redychooseblock).delay(3000).fadeIn();
					var hideloadingoverlay = setTimeout(function(){
						$thisblock.parents('.over-portfolio-item').find('.loader-overlay').fadeOut();
					
						clearTimeout(hideloadingoverlay);
					},3000); 
					// next hide block
						if(jQuery(".overlay-modul-close i").length){
							jQuery(".overlay-modul-close i").click(function(){
								jQuery(redychooseblock).fadeOut();
									var hideconentanim = setTimeout(function(){  
											jQuery('.container-grids').removeClass('left-push' ); 
											jQuery('.container-grids').addClass('right-push'); 	
											jQuery('body').removeClass('hide-scroll');											
										clearTimeout(hideconentanim);
									},300);
								 
								var displayconentimg = setTimeout(function(){
									$thisblock.parents('.over-portfolio-item').find('.overlay-text').removeClass('hidden-content');
									jQuery('body').removeClass('add-body' ); 
									jQuery('body').removeClass('left-body'); 
									jQuery('.container-grids').addClass('left-push'); 
									clearTimeout(displayconentimg);
								},1200);
								var displayconenttext = setTimeout(function(){
									$thisblock.parents('.over-portfolio-item').find('img').removeClass('hidden-content');
									clearTimeout(displayconenttext);
								},1400);
							$thisblock.parents('.over-portfolio-item').find('.loader-overlay-before').css({width: '0'});	
						
						 
							});
							
						}
				 

			});
	}

	
	
} 
// ---------------------------------------------------------
// Search
// --------------------------------------------------------- 
function InitDisplayLeftMenu(){
	"use strict";
	if(jQuery(".left-menu").length){
		 
			jQuery(".left-menu i").click(function(){
				jQuery('body').toggleClass("menu-open");
				return false;
			});
	}
} 

 

 
//------------------
//    Filterable Portfolio
//-------------------
function InitFilterPortfolio(){
	"use strict";

	jQuery('.filter a').click(function(){
		var $this = jQuery(this).parent('li');
		if ( $this.hasClass('active') ) {
			return;
		}

		var $optionSet = $this.parents('.filter');
		$optionSet.find('.active').removeClass('active');
		$this.addClass('active');

		var selector = jQuery(this).attr('data-filter');
		jQuery('.isotope').isotope({ filter: selector });
		var repeatportfolioinit2 = setTimeout(function(){
			InitPortfolioRows();
			clearTimeout(repeatportfolioinit2);
		},300); 
		return false;
	});
}
 
 	 
  

// ---------------------------------------------------------
// Back To Top
// --------------------------------------------------------- 
function backToTop(){
	"use strict";
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 100) {
			jQuery('#back_to_top').addClass('backactive');
		} else {
			jQuery('#back_to_top').removeClass('backactive');
		}
	});
	jQuery(document).on('click','#back_to_top',function(e){
		e.preventDefault();
		
		jQuery('body,html').animate({scrollTop: 0}, jQuery(window).scrollTop()/3, 'linear');
	});
	
}
// ---------------------------------------------------------
// Search
// --------------------------------------------------------- 
function InitSearch(){
	"use strict";
	if(jQuery("#top-search-trigger").length){
			/*jQuery("#top-search-trigger").click(function(){
				 jQuery('.search-wrapper').fadeIn();
			});*/
			 
			jQuery("#top-search i").click(function(){
				jQuery('.search-wrapper').toggleClass("search-open");
				return false;
			});
	}
} 