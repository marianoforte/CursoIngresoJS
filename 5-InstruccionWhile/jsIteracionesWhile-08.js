/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/

function mostrar()
{
	let respuesta;
	let numero;
    let sumaPositivos;
	let multiplicacionNegativos;
	numero = 0;
	sumaPositivos = 0;
	multiplicacionNegativos = 1;
	respuesta = "si";

	do{
		numero = parseFloat(prompt("Ingrese un numero positivo o negativo"));
		respuesta = prompt("Desea continuar? Escriba 'si' para continuar, 'no' para salir");
		if(numero>=0){
			sumaPositivos += numero;
		}
		if(numero<0){
			multiplicacionNegativos *= numero;
		}
	}while(respuesta != "no");
	
	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;
}

//FIN DE LA FUNCIÓN