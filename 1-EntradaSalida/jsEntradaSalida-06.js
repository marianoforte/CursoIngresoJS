/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/

function sumar()
{

	//asigno las variables a tomar
	let num1;
	let num2;
	let resultado;

	/*convierto los ID de las variables a numeros enteros y los asigno a las variables.
		Es una manera mas simplificada que asignarle un ID a las variables y luego convertir
		las variables a numeros enteros y luego volver a asignarlos a las mismas variables*/
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	/* Forma mas larga
	
	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;

	num1 = parseInt(num1);
	num2 = parseInt(num2);
	*/

	//sumo las variables
	resultado = num1+num2;
	
	//asigno ventana modal con el resultado
	alert("La Suma es " + resultado);
}
/*Código super simplificado

	alert("La suma es " + (parseInt(document.getElementById("txtIdNumeroUno").value) + parseInt(document.getElementById("txtIdNumeroDos").value)));

		La computadora siempre va a resolver primero los paréntesis de adentro hacia afuera, por eso se encierran los operandos
		entre paréntesis y luego se ocncatena el string de texto.
*/


 /*
 string + string = string
 string + number = string
 number + string = string
 number + number = number
 */