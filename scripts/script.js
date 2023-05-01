var daysOfWk, daysOfWk_shrt, monthsOfYear, timeout;
daysOfWk = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
daysOfWk_shrt = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function getDateandTime(format) { /* initialize "format" param value to 12 in minified script file */
                                   /*  compress error on compression with param value set */
    var dateObj, hours, meridiem, mins, secs, time, date, month, year, day, sup, today;
	dateObj = new Date();

	hours = dateObj.getHours();
    
    meridiem = (hours >= 12) ? "PM" : "AM";

	if (hours >= 12 && format === 12) hours = hours - 12;
    
    if (hours === 0) hours = 12;
    hours = hours.toString().padStart(2, 0);


	mins = dateObj.getMinutes().toString().padStart(2, 0);
	secs = dateObj.getSeconds().toString().padStart(2, 0);

	time = hours + ":" + mins + ":" + secs + " " + meridiem;

	date = dateObj.getDate();
	month = monthsOfYear[dateObj.getMonth()];
	year = dateObj.getFullYear();
	day = daysOfWk[dateObj.getDay()];

	sup;

    if (date === 1 || date === 21 || date === 31)
        sup = "st";
    else if (date === 2 || date === 22)
        sup = "nd";
    else if (date === 3 || date === 23)
        sup = "rd";
    else 
        sup = "th";

	today = day + ", " + date + "<sup>"  + sup + "</sup> " + month + ", " + year;
	$("#date-and-time").html(time + "<br />" + today);
}

function checkScrollTop() {
	if($(window).scrollTop() > 52) 
		$("#site-header").addClass("affixed-obvious");
	else
		$("#site-header").removeClass("affixed-obvious");
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

//jQuery.easing.def = '';

$(document).ready(function () {

	$(window).scroll(function () {
		checkScrollTop();
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

	$("#select-yr").click(function () {
		$(this).siblings("ul").toggle();
	});

	$("#select-yr + ul li").click(function () {
		$(this).parents("ul").toggle();
	});

	$(".hit .like").click(function () {
		$(this).toggleClass("liked");
	});

	$("#toggle-pop").click(function () {
		$(".side-nav-list.image-list").slideToggle();
		$(this).toggleClass("maximized");
	});


	$(".hit .ratings-container .see-ratings").click(function() {
		$(this).siblings(".ratings").slideToggle();
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

	//Start the date and time updating
	s = "0";
	if (typeof s.padStart != "undefined") {
		Interval = setInterval(getDateandTime,  1000);
		$("#date-and-time").show();
	}

	$(".close").click(function(){
		$(this).parent().hide();
	});

	$(".side-nav-list li.expandable").click(function () {

		$(this).siblings(".expandable").addClass("collapse").find(".fa.right").removeClass("fa-angle-down").addClass("fa-angle-right");
		$(this).toggleClass("collapse");
		if ($(this).hasClass("collapse"))
			$(this).find(".fa.right").removeClass("fa-angle-down").addClass("fa-angle-right");
		else
			$(this).find(".fa.right").removeClass("fa-angle-right").addClass("fa-angle-down");
		
	});

	$(window).triggerHandler("scroll");

});