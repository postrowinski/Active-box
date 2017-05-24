$(document).ready(function(){
	
	//scroll features
	$('#nav-features').click(function(event){
		event.preventDefault();
		var goTop = $('#sec-features').offset().top;
		$('html, body').animate({
			scrollTop: goTop
		}, 700);
	});
	
	//scroll works
	$('#nav-works').click(function(event){
		event.preventDefault();
		var goTop = $('#sec-works').offset().top;
		$('html, body').animate({
			scrollTop: goTop
		}, 700);
	});
	
	// scroll team
	$('#nav-team').click(function(event){
		event.preventDefault();
		var goTop = $('#sec-team').offset().top;
		$('html, body').animate({
			scrollTop: goTop
		}, 700);
	});
	
	//scroll clients
	$('#nav-clients').click(function(event){
		event.preventDefault();
		var goTop = $('#sec-clients').offset().top;
		$('html, body').animate({
			scrollTop: goTop
		}, 700);
	});
	
	//scroll download
	$('#nav-download').click(function(event){
		event.preventDefault();
		var goTop = $('#sec-download').offset().top;
		$('html, body').animate({
			scrollTop: goTop
		}, 700);
	});
	
	//scroll website top
	$('.scroll-top').click(function(event){
		event.preventDefault();
		var goTop = $('html').offset().top;
		$('html, body').animate({
			scrollTop: goTop
		}, 700);
	});
	
	//visibility .scroll-top button
	$(window).scroll(function(){
    	if($(this).scrollTop()>350) $('.scroll-top').fadeIn();
        else $('.scroll-top').fadeOut();
    });
});