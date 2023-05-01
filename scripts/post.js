var timeout;


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
    
    $("#search").click(function () {
		$("#site-srch").css("display", "flex");
		$("#site-srch [placeholder]").trigger("focus");
	});
    
    $(".close").click(function(){
		$(this).parent().hide();
	});
    
    $(".bar").click(function () {

		$("#site-nav ul:first-child").slideToggle();
        $("#site-header").toggleClass("expanded");
        $(this).toggleClass("maximized");
		if($(window).height() <= 402) $("#site-header").toggleClass("h402");
        
	});
    
    $(".side-nav-list li.expandable").click(function () {

		$(this).siblings(".expandable").addClass("collapse").find(".fa.right").removeClass("fa-angle-down").addClass("fa-angle-right");
		$(this).toggleClass("collapse");
		if ($(this).hasClass("collapse"))
			$(this).find(".fa.right").removeClass("fa-angle-down").addClass("fa-angle-right");
		else
			$(this).find(".fa.right").removeClass("fa-angle-right").addClass("fa-angle-down");
		
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
    
    $("#cmnt-btm").click(function () {

		$("html, body").animate({scrollTop:$("#post-a-cmnt").offset().top - 60}, 1500, 'easeInSine', function () {
			$("#toggle-scroll").hide(300);
		});

	});
    
    $(".like").click(function () {
		$(this).toggleClass("liked");
	});
    
    /*$("#rate li").click(function () {
        
        if($(this).hasClass("rate-active") && !$(this).next("li").hasClass("rate-active"))
            $(this).removeClass("rate-active");
        else if($(this).prev("li").hasClass("rate-active") || $(this).is(":first-child"))
            $(this).addClass("rate-active");
        
    });*/
    
    $("#rate li").click(function () {
        
        if($(this).is(":first-of-type") && !$(this).next().hasClass("rate-active")){
            $(this).toggleClass("rate-active"); 
        }else{
            $("#rate li").removeClass("rate-active");
            $(this).addClass("rate-active").prevAll().addClass("rate-active");
        }
           
    });
    
});


function openTab(name, event) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    $(".tabcontent").each(function(i, elem) {
        $(elem).hide();
    });

    // Get all elements with class="tablink" and remove the class "active"
    $(".tablink").each(function(i, elem) {
        $(elem).removeClass("active");
    });

    // Show the current tab, and add an "active" class to the link that opened the tab
    $("#" + name).show();
    
    event.currentTarget.className += " active";
    
}


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