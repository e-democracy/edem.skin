"use strict";jQuery.noConflict();function edem_skin_add_anonymous_buttons(){if(!jQuery("#edem-content-js-data").data("loggedin")){var b=".edem-site-about-anonymous-buttons",a=jQuery(b);
a.html(['<a class="btn" href="/getinvolved/join" style="display:block; margin-bottom:.5em;">Find a Forum</a>','<a class="btn" href="/login.html?came_from=/" data-icon="🔒" style="display:block; margin-bottom:.5em;">Sign In</a>'].join("\n"))
}}jQuery(window).load(edem_skin_add_anonymous_buttons);