

$("#navSameID1,#navSameID2,#navSameID3,#navSameID4,#navSameID5,#navSameID6").click(function() {
    $("#myNav").css("width", "0%")
});

function openNav() {
    document.getElementById("myNav").style.width = "100%"
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%"
}


(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        $(window).scroll(function() {
            $(this).scrollTop() > 0 ? $(".header").addClass("sticky") : $(".header").removeClass("sticky")
        })
    });
    lightbox.option({
        'disableScrolling': true,

      })
    
    jQuery(window).load(function(){
        
    });
}(jQuery));	