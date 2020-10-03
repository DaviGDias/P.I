$(document).ready(function(){
	var imgItens = $('.slider li').length; // Numero de Slides
	var imgPos = 1;

	// Agregando paginacion --
	for(i = 1; i <= imgItens; i++){
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

		// Da estilo a paginações selecionada
		$('.pagination li').css({'color': '#858585'});
		$(this).css({'color': '#cdb82e'});

		imgPos = paginationPos;

	}

	function nextSlider(){
		if( imgPos >= imgItens){imgPos = 1;} 
		else {imgPos++;}

		$('.pagination li').css({'color': '#858585'});
		$('.pagination li:nth-child(' + imgPos +')').css({'color': '#cdb82e'});

		$('.slider li').hide(); // Oculta todos os slides
		$('.slider li:nth-child('+ imgPos +')').fadeIn(); // Mostra o slide selecionado

	}

	function prevSlider(){
		if( imgPos <= 1){imgPos = imgItens;} 
		else {imgPos--;}

		$('.pagination li').css({'color': '#858585'});
		$('.pagination li:nth-child(' + imgPos +')').css({'color': '#cdb82e'});

		$('.slider li').hide(); // Oculta todo os slides
		$('.slider li:nth-child('+ imgPos +')').fadeIn(); // Mostra o slide selecionado
	}

/* Quartos */
	$(function(){
		$('#conteudoQuartos').mouseover(function(){
			$("#conteudoQuartos").hover().delay(2000);
			$('#conteudoQuartos').css("width", "500px" )
			.delay( 800 ).fadeIn( 400 );
			
		
		});
		$("#conteudoQuartos").mouseout(function(){
			$("#conteudoQuartos").css('width', "300px")
		})
	})

	/* Cozinha */
	$(function(){
		$('#conteudoCozinha').mouseover(function(){
			$("#conteudoCozinha").hover().delay(2000);
			$('#conteudoCozinha').css("width", "500px")
			.delay( 800 ).fadeIn( 400 );		
		
		});
		$("#conteudoCozinha").mouseout(function(){
			$("#conteudoCozinha").css('width', "300px")
					
		})
		
	})
	$(function(){
		$('#conteudoSalas').mouseover(function(){
			$("#conteudoSalas").hover().delay(2000);
			$('#conteudoSalas').css("width", "500px","cursor","pointer" )
			.delay( 800 ).fadeIn( 400 )
				
		});
		$("#conteudoSalas").mouseout(function(){
			$("#conteudoSalas").css('width', "300px")
			
		})
		
	})
	$(function(){
		$('#conteudoBanheiros').mouseover(function(){
			$("#conteudoBaheiros").hover().delay(2000);
			$('#conteudoBanheiros').css("width", "500px","cursor","pointer" )
			.delay( 800 ).fadeIn( 400 )
			
			
		
		});
		$("#conteudoBanheiros").mouseout(function(){
			$("#conteudoBanheiros").css('width', "300px")
			
		})
		
	})


});


