$(function(){

	var interval;
	let acceptDefil;
	let val;
	let largeur;

	acceptDefil = true;

	largeur = $('.slider').width();
	$('.slider li').width(largeur);

	$(window).resize(function(){
		largeur = $('.slider').width();
		$('.slider li').width(largeur);
	});

	function defileRight() {
		$('.slider ul').animate({'left':-largeur}, 1000, function(){
			$('.slider li:last').after($('.slider li:first'));
			$(this).css({'left': 0});
			acceptDefil = true;
			changeText();
		});
	}

	function defileLeft() {
		$('.slider ul').css({'left':-largeur});
		$('.slider li:first').before($('.slider li:last'));
		$('.slider ul').animate({'left':0}, 1000, function(){
			acceptDefil = true;
			changeText();
		});
	}

	interval = setInterval(defileRight, 3000);

	$('.slider .icon-chevron-left').click(function(){
		if(acceptDefil) {
			acceptDefil = false;
			defileLeft();
		}
		
	});

	$('.slider .icon-chevron-right').click(function(){
		if(acceptDefil) {
			acceptDefil = false;
			defileRight();
		}
	});

	$('.slider span').mouseleave(function(){
		interval = setInterval(defileLeft, 3000);
	});

	$('.slider span').mouseenter(function(){
		clearInterval(interval);
	});

	function changeText() {
		val = $('.slider li:first img').attr('alt');
		$('.slider h1').text(val);
	}
	



});