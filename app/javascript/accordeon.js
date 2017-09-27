$(function(){
	$('.accordeon h1').click(function(){
		if(!$(this).hasClass('active')) {
			// retirer class active sur tous les h1
			$('.accordeon h1').removeClass('active');
			// add class active sur this
			$(this).addClass('active');
			// fermer tous les p
			$('.accordeon p').slideUp();
			// ouvrir le p juste après this
			$(this).next().slideDown();
			// remettre icon-chevron-right sur tous les h1 et supprimer icon-chevron-down
			$('.accordeon h1').find('span').addClass('icon-chevron-right').removeClass('icon-chevron-down');
			// on toggle la class icon-chevron-right contre icon-chevron-down
			$(this).find("span").toggleClass("icon-chevron-right icon-chevron-down");
		}
	});
});