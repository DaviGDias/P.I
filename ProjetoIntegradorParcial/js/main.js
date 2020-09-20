$(document).ready(function(){
	var imgItems = $('.slider li').length; // Numero de Slides
	var imgPos = 1;

	// Agregando paginacion --
	for(i = 1; i <= imgItems; i++){
		$('.pagination').append('<li><span class="fa fa-circle"></span></li>');
	} 
	//------------------------

	$('.slider li').hide(); // Oculta todos os slides
	$('.slider li:first').show(); // Mostra todos os slides
	$('.pagination li:first').css({'color': '#cdb82e'}); // Da um estilo ao primeiro item da paginação

	// Executa todas as funções
	$('.pagination li').click(pagination);
	$('.right span').click(nextSlider);
	$('.left span').click(prevSlider);


	setInterval(function(){
		nextSlider();
	}, 6000);	

	// Funções =========================================================

	function pagination(){
		var paginationPos = $(this).index() + 1; // Posição da paginação selecionada

		$('.slider li').hide(); // Oculta todos os slides
		$('.slider li:nth-child('+ paginationPos +')').fadeIn(); // Mostra os slides selecionados

		// DDa estilo a paginações selecionada
		$('.pagination li').css({'color': '#858585'});
		$(this).css({'color': '#cdb82e'});

		imgPos = paginationPos;

	}

	function nextSlider(){
		if( imgPos >= imgItems){imgPos = 1;} 
		else {imgPos++;}

		$('.pagination li').css({'color': '#858585'});
		$('.pagination li:nth-child(' + imgPos +')').css({'color': '#cdb82e'});

		$('.slider li').hide(); // Oculta todo os slides
		$('.slider li:nth-child('+ imgPos +')').fadeIn(); // Mostra o slide selecionado

	}

	function prevSlider(){
		if( imgPos <= 1){imgPos = imgItems;} 
		else {imgPos--;}

		$('.pagination li').css({'color': '#858585'});
		$('.pagination li:nth-child(' + imgPos +')').css({'color': '#cdb82e'});

		$('.slider li').hide(); // Oculta todo os slides
		$('.slider li:nth-child('+ imgPos +')').fadeIn(); // Mostra o slide selecionado
	}

});