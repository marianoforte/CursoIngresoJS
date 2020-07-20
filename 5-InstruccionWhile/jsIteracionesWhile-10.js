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
	let array = ["sumaPositivos", "sumaNegativos", "ceros", "numerosPares", "promedioPositivos", "promedioNegativos", "diferenciaPosNeg"];
	let numeros;
	let respuesta;

	respuesta = "si";

	numeros = 1;
	numerosPares = 0
	array [0] = 0; //sumaPositivos
	array [1] = 0; //sumaNegativos
	array [2] = 0; //ceros
	array [3] = 0; //numerosPares
	array [4] = 0; //promedioPositivos
	array [5] = 0; //promedioNegativos
	array [6] = 0; //diferenciaPosNeg

	while(respuesta != "no")
	{
		numeros++;
		numeros = parseFloat(prompt("Ingrese un número"));
		respuesta = prompt("Desea continuar? Escriba 'si' para continuar, 'no' para salir");

		if(numeros >=0)
		{
		array[0] = array [0] + numeros;
		array [4] = array [4] + numeros;
		}
		else
		{
		array [1] = array [1] + numeros;
		array [5] = array [5] + numeros;
		}
		/*
		if (numbers % 2 == 0) {
			return array [3];
		}
		else
		{}
		*/

		array [6] = array[0] - array [1];
	}	

	document.write("<h1>Resultados:</h1>");
	document.write("<br>");
	document.write("La suma de los números positivos es :" + array[0]);
	document.write("<br>");
	document.write("La diferencia entre los números negativos es: " + array [1]);
	document.write("<br>");
	document.write("Hay " + array [2] + " ceros.");
	document.write("<br>");
	document.write("La cantidad de números pares es: " + array [3]);
	document.write("<br>");
	document.write("El promedio entre los números positivos es: " + array [4] / numeros);
	document.write("<br>");
	document.write("El promedio entre los números negativos es: " + array [5] / numeros);
	document.write("<br>");
	document.write("La diferencia entre números positivos y negativos es: " + array [6]);

}
//FIN DE LA FUNCIÓN