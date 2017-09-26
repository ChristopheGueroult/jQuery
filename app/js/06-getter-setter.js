$(function(){

	$('button:first-child').click(function(){
		$('#action').text('texte ajouté avec methode text()');
	});

	$('button:nth-child(2)').click(function(){
		$('#action').html('<b>html ajouté avec methode html()</b>');
	});

	$('button:nth-child(3)').click(function(){
		$('#name').val('Gueroult');
	});

	$('button:nth-child(4)').click(function(){
		let text = $('#action').text();
		console.log(text);
	});

	$('button:nth-child(5)').click(function(){
		let html = $('#action').html();
		console.log(html);
	});

	$('button:nth-child(6)').click(function(){
		let name = $('#name').val();
		console.log(name);
	});




});