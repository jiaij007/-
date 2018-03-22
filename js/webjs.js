$(function(){
	
	var sidebar = $(".sidebar"),
	    mask = $(".mask"),
	    backon = $(".back"),
	    srt = $(".sidebar_right"),
	    nav = $(".headernav");


	function showsidebar(){
		mask.fadeIn();
		sidebar.animate({"right":"0"});
	}

	function hidesidebar(){
		mask.fadeOut();
		sidebar.animate({"right":"-300px"});
	}

	srt.on("click", showsidebar);
	mask.on("click", hidesidebar);

	backon.on("click", function(){
		$("html, body").animate({
			"scrollTop":"0"
		},800)
	});




	$(window).on("scroll", function(){
		if($(window).scrollTop() > $(window).height()){
			backon.fadeIn();	
		}else{
			backon.fadeOut();			
		}
	});
	$(window).trigger("scroll");




})