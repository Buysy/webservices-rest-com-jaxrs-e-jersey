$(document).ready(function(){
	//Acréscimo de HTML por ID
	//$('#cabecalho').html('<h1>Olá, bem vindo ao ~2RealBr~ </h1>');
	$('#cabecalho').html('<h1> Clique aqui para ser redirecionado ao game</h1>');
	$('#msg').html('<h2> MENSAGEM ESCONDIDA</h2>').hide();
	
	//Acréscimo de TEXTO por Class
	$('.msgSub').text('Olá, bem vindo ao ~2RealBr~');
	
	//Funções para clicks
	$('#cabecalho').on('click', function () {
		//Animate Jquery
		$('.msgSub').animate({opacity: '0', width : '0%'}, 5000);
		setTimeout(msg, 5000);
	});
	
	function msg(){
		alert('Você esta sendo redirecionado, Sucesso');
	}
	$('#cabecalho').on('click', function(){
		$('.msg').show({opacity: '0', width : '0%'}, 8000);
	});
	
	
});