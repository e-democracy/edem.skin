/*
 * Disable the toggling of dropdown menus on small screens, enable on larger 
 * screens. 
 */
function setSitenavBehavior(){
    // .navbar-header float is used to observe when the small screen media
    // query has been tripped
    if (jQuery(".navbar-header").css("float") == "none" ){
		jQuery("#sitenav .dropdown-toggle").attr('data-toggle', '');
	} else {
		jQuery("#sitenav .dropdown-toggle").attr('data-toggle', 'dropdown');
	}
}

jQuery(window).resize(setSitenavBehavior);
jQuery(window).load(setSitenavBehavior);

// On small screens (when sitenav-collapse matters), dropdown menus must open
// when the sitenav menu opens
jQuery("#sitenav-collapse").on("show", function(){
    jQuery("#sitenav .dropdown").addClass("open");
});
jQuery("#sitenav-collapse").on("hidden", function(){
    jQuery("#sitenav .dropdown").removeClass("open");
});
