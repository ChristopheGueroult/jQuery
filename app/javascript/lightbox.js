$(function(){
	var index;
	var ngImg;

	nbImg = $('.galerie img').length;

	$('.galerie img').click(function(){
		let src = $(this).attr('src');
		$('.lightbox img').attr('src', src);
		$('.lightbox').fadeIn();
		index = $('.galerie img').index($(this));
		changePuce();
	});

	$('.lightbox .icon-close').click(function(){
		$('.lightbox').fadeOut();

	});

	function changeImg() {
		let newSrc = $('.galerie img').eq(index).attr('src');
		$('.lightbox img').attr('src', newSrc);
	}

	$('.lightbox .icon-chevron-left').click(function(){
		//si sur img 0, img suivante = dernière img
		index = (index -1 + nbImg)%nbImg;
		changeImg();
		changePuce();
	});

	$('.lightbox .icon-chevron-right').click(function(){
		//si sur img 7, img suivante = img 0
		index = (index +1)%nbImg;
		changeImg();
		changePuce();
	});

	function generatePuces() {
		puces = '<div class="puces">';
		for(let i = 1 ; i <= nbImg ; i++) {
			puces += '<i class="icon-circle-o"></i>'
		}
		puces += "</div>";
		$('.lightbox .cadre img').after(puces);
	}

	generatePuces();

	function changePuce() {
		$('.lightbox .puces i').removeClass('icon-circle');
		$('.lightbox .puces i').eq(index).addClass('icon-circle');
	}

	$(document).on('click', '.lightbox i', function(){
		index = $(document).find('.lightbox i').index($(this));
		changeImg();
		changePuce();
	});

});