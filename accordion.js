// jQuery script to make the accordion interactive

/* global jQuery */
jQuery(document).ready(function() {
	function close_accordion_section() {
        jQuery('.accordion .accordion-section-title').removeClass('active');
		jQuery('.accordion .accordion-section-content').slideUp(500).removeClass('open');
	}

	jQuery('.accordion-section-title').click(function(e) {
		var currentAttrValue = jQuery(this).attr('href');
            if(jQuery(e.target).is('.active')) {
			     close_accordion_section();
		    } else {
			     close_accordion_section();
			     jQuery(this).addClass('active');
			     jQuery('.accordion ' + currentAttrValue).slideDown(500).addClass('open'); 
		}
		e.preventDefault();
	});
});