/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//declaro las variables
	let sueldo;
	let resultado;

	//transformo el numero a entero
	sueldo = parseFloat(document.getElementById("txtIdSueldo").value);

	//saco el porcentaje
	resultado = sueldo * 0.1;

	//lo sumo a la variable sueldo y lo asigno al resultado
	resultado = sueldo + resultado

	//muestro el resultado en la caja de texto y asigno la cantidad de decimales máximos
	document.getElementById("txtIdResultado").value = resultado.toFixed(2);
}
