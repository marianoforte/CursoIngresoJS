/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	sexoIngresado = prompt("Ingrese su sexo, F o M.");

	while(sexoIngresado == 'f' || sexoIngresado == 'F'){
		document.getElementById("txtIdSexo").value = sexoIngresado;
	}
	while(sexoIngresado == 'm' || sexoIngresado == 'M'){
		document.getElementById("txtIdSexo").value = sexoIngresado;
	}
	while(sexoIngresado != 'm' || sexoIngresado != 'M' || sexoIngresado != 'f' || sexoIngresado != 'F'){
		sexoIngresado = prompt("Sexo inválido. Reingrese (f o m): ");
	}
}//FIN DE LA FUNCIÓN