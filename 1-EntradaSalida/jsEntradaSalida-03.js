/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//reservo espacio de memoria para guardar el nombre del usuario
	let nombre;
	
	//asigno a la variable el valor introducido en la ID de html
	nombre = document.getElementById("txtIdNombre").value;
	
	//muestro en una ventana modal el valor de la variable
	alert(nombre);

	//limpio la caja de texto asignandole un espacio vacio al ID de html
	document.getElementById("txtIdNombre").value = "";

}


