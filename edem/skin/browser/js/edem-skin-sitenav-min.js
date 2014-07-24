"use strict";function setSitenavBehavior(){if(jQuery(".navbar-header").css("float")=="none"){jQuery("#sitenav .dropdown-toggle").attr("data-toggle","");
jQuery("#sitenav-account").detach().prependTo("#sitenav")}else{jQuery("#sitenav .dropdown-toggle").attr("data-toggle","dropdown");
jQuery("#sitenav-account").detach().appendTo("#sitenav")}}jQuery(window).resize(setSitenavBehavior);
jQuery(window).load(setSitenavBehavior);jQuery("#sitenav-collapse").on("show",function(){jQuery("#sitenav .dropdown").addClass("open")
});jQuery("#sitenav-collapse").on("hidden",function(){jQuery("#sitenav .dropdown").removeClass("open")
});