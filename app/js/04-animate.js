$(function(){

	$('button:first-child').click(function(){
		$('.bleu').animate({'left':500}, 1000);
	});

	$('button:nth-child(2)').click(function(){
		$('.bleu').delay(Math.random()*3000).animate({'left':500}, 1000);
		$('.rouge').delay(Math.random()*3000).animate({'left':500}, 1000);
		$('.vert').delay(Math.random()*3000).animate({'left':500}, 1000);
		$('.violet').delay(Math.random()*3000).animate({'left':500}, 1000);
	});

	$('button:nth-child(3)').click(function(){
		$('.bleu').animate({
			'left': 500,
			'opacity': 0.5,
			'height': 250,
			'width': 250
		}, 3000);
	});

	$('button:nth-child(4)').click(function(){
		$('.bleu').animate({
			'left': '+=100px',
			'opacity': 0.5,
			'height': '+=250px',
			'width': '-=10px'
		}, 3000);
	});

	$('button:nth-child(5)').click(function(){ 
		$('.bleu').animate({
			'height': 'toggle'
		}, 3000);
	});

	$('button:nth-child(6)').click(function(){
		let elem = $('.bleu');
		for(i = 0 ; i <= 3 ; i++){
			elem.animate({'left':500,'top':100}, 1000)
			.slideUp(1000)
			.slideDown(1000)
			.animate({'left':0}, 1000);
		}
	});

	$(window).mousemove(function(e){
    	//console.log(e.pageY);
    	let pos = $('button:nth-child(8)').position();
    	if(e.pageY == pos.top-50) {
    		let newPos = 10;
			$('button:nth-child(8)').animate({'top':'+=50px'},400);
		}
	});
	
});