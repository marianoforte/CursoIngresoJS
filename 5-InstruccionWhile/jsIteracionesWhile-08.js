/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let contador;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	contador = 1;
	sumaPositivos=1;
	multiplicacionNegativos=1;
	respuesta = "si";


	while(respuesta != "no")
	{
		contador++;
		contador = parseFloat(prompt("Ingrese un numero positivo o negativo"));
		respuesta = prompt("Desea continuar? Escriba 'si' para continuar, 'no' para salir");

		if(contador<0)
		{
			respuesta = respuesta + contador
			respuesta = multiplicacionNegativos;
			multiplicacionNegativos = multiplicacionNegativos * multiplicacionNegativos;
			break;
		}
		else if(contador>=0)
		{
			respuesta = respuesta + contador
			respuesta = sumaPositivos;
			sumaPositivos = sumaPositivos + sumaPositivos;
			break;
		}
		else
		{
			alert("Ingrese un número válido");
			break;
		}
	}


	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN