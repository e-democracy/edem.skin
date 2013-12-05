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

$(window).resize(setSitenavBehavior);
$(window).load(setSitenavBehavior);
