$(function(){
	// masquer les icons de validations au chargement de la page
	$(".formulaire .validation").css({display: "none"});

	// remplir les champs avec texte par default
	$('.formulaire [name]').each(function(){
		$(this).val( $(this).attr("data-default") );
	});

	// quand un champ prend le focus
	$('.formulaire [name]').focus(function(){
		// si text par default on le vide pour laisser l'utilisateur saisir son texte
		if( $(this).val() == $(this).attr("data-default") ) {
			$(this).val("");
		}
	});

	function changeIcon(elem,icon1,icon2) {
		$(elem).siblings(".validation").addClass(icon1)
		.removeClass(icon2)
		.css({display: "block"});
	}

	// remettre text par default quand on quitte le champs
	$('.formulaire [name]').blur(function(){
		// si le champs est vide on remet le texte par default
		if( $(this).val() ==  "") {
			$(this).val( $(this).attr("data-default") );
			if( $(this).is('[required]') ) {
				changeIcon($(this),"icon-close","icon-check");
			}
		} else {
			if( $(this).is('[required]') ) {
				changeIcon($(this),"icon-check","icon-close");
			}
		}
	});


});