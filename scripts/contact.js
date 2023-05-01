$(document).ready(function () {
    
    
    $(window).resize(function () {
		if (this.innerHeight <= 402 && this.innerWidth <= 836 && $(".bar").hasClass("maximized"))
            $("#site-header").addClass("h402");
        else
            $("#site-header").removeClass("h402");
            
            
        /* the above is really important, it fixes addingClass('h402') on slideUp 
        *  addClass('h402') on slideUp is caused by resizing the browser height 
        *  less than 402 after bar is clicked and menu is droped down
        *
        * if there's no resize(), there'll be scrollbar issues for smaller heights
        *
        */
	});
    
    
    $(".bar").click(function () {

		$("#site-nav ul:first-child").slideToggle();
        $("#site-header").toggleClass("expanded");
        $(this).toggleClass("maximized");
		if($(window).height() <= 402) $("#site-header").toggleClass("h402");
        
	});
    
    $("#search").click(function () {
		$("#site-srch").css("display", "flex");
		$("#site-srch [placeholder]").trigger("focus");
	});
    
    $("#contact-btn-form").click(function () {
		$("#contact-form-win").css("display", "flex");
        $("#contact-form [autofocus]").trigger("focus");
	});
    
    $("#contact-btn-det").click(function () {
		$("#contact-det-win").css("display", "flex");
	});
    
    $(".close").click(function(){
		$(this).parent().hide();
	});
    
});