var timeout;


function toggleScroll() {

	/**
	* show on scroll
	* after 10s of scroll end hide
	*/

	$("#toggle-scroll").show(300);

	clearTimeout(timeout);

	timeout = setTimeout(function () {
		$("#toggle-scroll").hide(300);
	}, 10000);
	
}


$(document).ready(function () {
    
    $(window).scroll(function () {
		toggleScroll();
	});
    
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
    
    $("#scroll-up").click(function () {

		$("html, body").animate({scrollTop:0}, 1500, 'easeOutSine', function () {
			$("#toggle-scroll").hide(300);
		});

	});

	$("#scroll-down").click(function () {

		$("html, body").animate({scrollTop:$(document).height()}, 1500, 'easeInSine', function () {
			$("#toggle-scroll").hide(300);
		});

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
    
    $(".close").click(function(){
		$(this).parent().hide();
	});
    
});