/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/

function mostrar()
{
	let respuesta;
	let numero = 0;
    let sumaPositivos = 0;
	let multiplicacionNegativos = 1;
	let flag = 0;


	do{
		numero = parseFloat(prompt("Ingrese un numero positivo o negativo"));
		if(numero>=0){
			sumaPositivos += numero;
		}
		else{
			flag = 1;
			multiplicacionNegativos *= numero;
		}
		respuesta = prompt("Si desea continuar ingresando números ingrese 's'");
	}while(respuesta == "s");
	
	if(flag == 0){
		multiplicacionNegativos = 0;
	}
	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;
}

//FIN DE LA FUNCIÓN