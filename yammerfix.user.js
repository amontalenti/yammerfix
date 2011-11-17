// ==UserScript==
// @name yammerfix
// @namespace yammerfix
// @description Fixes Yammer's broken UI
// @include https://*.yammer.com/*
// ==/UserScript==
//

var jQuery = unsafeWindow.jQuery;
var doc = unsafeWindow.document;

jQuery(doc).ready(function() {
    // move online-now to left sidebar, where it should be
    jQuery("#online-now").appendTo(jQuery(".yj-feed-navigator-container-wrap")); 
    jQuery("#online-now h5").hide(); 
    jQuery("#online-now").css("margin", "10px");
    // what a useless column, anyway
    jQuery("#column-three").remove();
    // ahhh, let's have some more space for the CONTENT
    jQuery("#column-two").css("width", "600px");
    // expand footer to get rid of cruft below
    jQuery("#footer").css("height", "2000px");
    // remove the ugly "network logo" -- who needs it!
    jQuery("#network-logo").hide();
    // and the network switcher, who needs it!
    jQuery("#uni-networks-title").hide();
    // hide useless Groups functionality
    jQuery(".yj-nav-menu .nav-list:nth-child(2)").hide();
    // expand the useful apps
    if (/More/.test(jQuery(".yj-nav-more-link").text())) { 
        jQuery(".yj-nav-more-link").click();
    }
    // hide the org chart and pages links, useless!
    jQuery(".apps-nav-list a[href$=org_chart]").hide();
    jQuery(".apps-nav-list a[href$=pages]").hide();
    // ahhh, that's better!

});
