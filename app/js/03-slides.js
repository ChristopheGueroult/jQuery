$(function(){

	$('button:first-child').click(function(){
		$('.panel').slideUp(1000);
	});

	$('button:nth-child(2)').click(function(){
		$('.panel').slideDown(1000);
	});

	$('button:nth-child(3)').click(function(){
		$('.panel').slideToggle(1000);
	});

});