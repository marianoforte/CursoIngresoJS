/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//asigno a una porcion de memoria una variable
	let nombre;

	//asigno una ventana con caja de texto donde el usuario pueda ingresar el nombre
	nombre = prompt("Ingrese su nombre");

	//asigno una ventana modal devolviendo el dato introducido en la caja de texto del prompt
	alert(nombre);


}

