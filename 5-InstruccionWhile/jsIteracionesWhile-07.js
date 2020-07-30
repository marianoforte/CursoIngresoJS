/*
Al presionar el botón, pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let acumulador = 0;
	let contador = 0;
	let respuesta;

	do{
		contador++;
		acumulador += parseInt(prompt("Ingrese un número"));
		respuesta = prompt("Si desea continuar ingresando números ingrese 's'");
	}while(respuesta == "s");

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador / contador;
}//FIN DE LA FUNCIÓN