$(function(){

	// $('li').click(function(){
	// 	alert($(this).html());
	// });

	$('li').click(function(e){
		e.stopPropagation();
		alert($(this).html());
	});

});