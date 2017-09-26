$(function(){

	$('ul').one('click', function(){
		$(this).append("<li>dernier item ajouté avec jQuery</li>");
	});

	// $('li:nth-child(4)').click(function(){
	// 	alert("n'importe quoi !");
	// });

	$(document).on('click','li:nth-child(4)',function(){
		alert("n'importe quoi !");
	});

});