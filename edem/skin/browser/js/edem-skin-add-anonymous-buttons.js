"use strict";
jQuery.noConflict();

function edem_skin_add_anonymous_buttons(){
    if (!jQuery('#edem-content-js-data').data('loggedin')){
        var about_anon_buttons_id = '.edem-site-about-anonymous-buttons', about_anon_buttons = jQuery(about_anon_buttons_id);
        about_anon_buttons.html([
            '<a class="btn" href="/getinvolved/join" style="display:block; margin-bottom:.5em;">Find a Forum</a>',
            '<a class="btn" href="/login.html?came_from=/" data-icon="🔒" style="display:block; margin-bottom:.5em;">Sign In</a>'
        ].join('\n'));
    }
}

jQuery(window).load(edem_skin_add_anonymous_buttons);
