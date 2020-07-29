function mostrar()
{
	let contador = 1;
	let acumulador = 0;
	let numeroIngresado;

	while(contador<=5){
		numeroIngresado = parseFloat(prompt("Ingrese 5 números distintos"));
		acumulador += numeroIngresado;
		contador++;
	}
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador / 5;
}//FIN DE LA FUNCIÓN