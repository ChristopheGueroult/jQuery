$(function(){

	$('button:first-child').click(function(){
		$('ul').before('<p>balise ajouté avec methode before()</p>');
	});

	$('button:nth-child(2)').click(function(){
		$('ul').after('<p>balise ajouté avec methode after()</p>');
	});

	$('button:nth-child(3)').click(function(){
		$('ul').prepend('<li>balise ajouté avec methode prepend()</li>');
	});

	$('button:nth-child(4)').click(function(){
		$('ul').append('<li>balise ajouté avec methode append()</li>');
	});



});