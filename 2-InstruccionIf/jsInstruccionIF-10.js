function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	let numero;

	numero = Math.round(Math.random()*(11-1)+parseInt(1));

	if (numero >= "9"){
		alert(numero + ": Excelente");
	}
	
	else if (numero >= "4" && numero < "9"){
		alert(numero + ": Aprobado");
	}

	else{
		alert(numero + ": Vamos, la proxima se puede");
	}

}//FIN DE LA FUNCIÓN