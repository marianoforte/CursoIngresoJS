/*
Al presionar el botón, pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let acumulador = 0;
	let contador = 0;
	let respuesta = "si";

	while(respuesta != "no"){
		contador++;
		acumulador = parseInt(prompt("Ingrese un número"));
		respuesta = prompt("Desea continuar? Escriba 'si' para continuar, 'no' para salir");
		acumulador += acumulador;
	}
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador / contador;
}//FIN DE LA FUNCIÓN