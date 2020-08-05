/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;

	/*while(!(numeroIngresado >= 0 && numeroIngresado <=9)){
		numeroIngresado = parseInt(prompt("Eror: Número no válido. Ingrese un número entre 0 y 9 inclusive."));
	}*/
	numeroIngresado = parseInt(prompt("Ingrese un número entre 0 y 9 inclusive."));

	while(numeroIngresado >= 0 && numeroIngresado <=9){
		document.getElementById("txtIdNumero").value = numeroIngresado;
	}
		


	document.getElementById("txtIdNumero").value = numeroIngresado;
}//FIN DE LA FUNCIÓN