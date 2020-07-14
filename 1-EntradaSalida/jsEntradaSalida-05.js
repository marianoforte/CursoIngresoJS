/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre;
	let edad;

	nombre = txtIdNombre.value;

	nombre = "Usted se llama " + nombre;

	edad = txtIdEdad.value;
	
	edad = " y tiene " + edad;

	edad = edad + " años";


	alert(nombre + edad);
}

