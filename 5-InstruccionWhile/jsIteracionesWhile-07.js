/*
Al presionar el botón, pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let respuesta;
	contador = 1;
	acumulador = 0;
	respuesta = "si";


	while(respuesta != "no")
	{
		contador++;
		contador = parseFloat(prompt("Ingrese un número"));
		respuesta = prompt("Desea continuar? Escriba 'si' para continuar, 'no' para salir");
		acumulador += contador;
	}


	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador / contador;

}//FIN DE LA FUNCIÓN