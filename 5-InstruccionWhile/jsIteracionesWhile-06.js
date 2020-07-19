function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;

	contador=1;
	acumulador=0;
	
	while(contador<=5)
	{
		
		numeroIngresado = prompt("Ingrese 5 números distintos");
		numeroIngresado = parseFloat(numeroIngresado);
		acumulador = acumulador + numeroIngresado;
		contador = contador + 1
	}
	
	
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador / 5;
}//FIN DE LA FUNCIÓN