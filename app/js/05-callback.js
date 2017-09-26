$(function(){

	$('button:first-child').click(function(){
		$('.bleu').animate({'left':500}, 1000);
		alert('animation terminée');
	});

	$('button:nth-child(2)').click(function(){
		$('.bleu').animate({'left':500}, 1000, function(){
			alert('animation terminée');
		});
	});

});