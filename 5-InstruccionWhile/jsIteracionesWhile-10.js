/*
Al presionar el botón pedir números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let numero;
    let sumaPositivos;
	let sumaNegativos;
	let ceros;
	let numerosPares;
	let promedioPositivos;
	let promedioNegativos;
	let diferenciaPosNeg;
	let respuesta;

	numero = 0;
	respuesta = "si";

	while(respuesta != "no")
	{
		numero++;
		numero = parseFloat(prompt("Ingrese un número"));
		respuesta = prompt("Desea continuar? Escriba 'si' para continuar, 'no' para salir");
	}
	
	sumaPositivos = sumaPositivos + numero;
	sumaNegativos = sumaNegativos + numero;
	ceros = ceros + numero;


	document.write = ("La suma de los números positivos es :" + sumaPositivos);
	document.write = ("La diferencia entre los números negativos es: " + sumaNegativos);
	document.write = ("Hay " + ceros + " ceros.");
	document.write = ("La cantidad de números pares es: " + numerosPares);
	document.write = ("El promedio entre los números positivos es: " + promedioPositivos);
	document.write = ("El promedio entre los números negativos es: " + promedioNegativos);
	document.write = ("La diferencia entre números positivos y negativos es: " + diferenciaPosNeg);

}
//FIN DE LA FUNCIÓN