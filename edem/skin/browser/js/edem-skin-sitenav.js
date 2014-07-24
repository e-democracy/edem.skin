"use strict";
/*
 * Disable the toggling of dropdown menus on small screens, enable on larger 
 * screens. 
 * Also move the Account items of the menu to the top on small screens
 */
function setSitenavBehavior(){
    // .navbar-header float is used to observe when the small screen media
    // query has been tripped
    if (jQuery(".navbar-header").css("float") == "none" ){
		jQuery("#sitenav .dropdown-toggle").attr('data-toggle', '');
        jQuery("#sitenav-account").detach().prependTo("#sitenav");
	} else {
		jQuery("#sitenav .dropdown-toggle").attr('data-toggle', 'dropdown');
        jQuery("#sitenav-account").detach().appendTo("#sitenav");
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
