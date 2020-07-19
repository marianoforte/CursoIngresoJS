/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	sexoIngresado = prompt("Ingrese su sexo, F o M.");

	while(sexoIngresado == "f")
	{
		document.getElementById("txtIdSexo").value = sexoIngresado;
		break;
	}
	while(sexoIngresado == "m")
	{
		document.getElementById("txtIdSexo").value = sexoIngresado;
		break;
	}
	

	
}//FIN DE LA FUNCIÓN