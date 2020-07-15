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
	sueldo = parseInt(document.getElementById("txtIdSueldo").value);

	resultado = sueldo * 10 / 100;

	if(sueldo = "")
	{
		resultado = "";
	}

	document.getElementById("txtIdResultado").value = resultado;
}
