/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//reservo espacio de memoria para guardar el nombre y la  edad del usuario
	let nombre;
	let edad;

	//le asigno a las variables los valores ingresados en el ID de html 
	nombre = document.getElementById("txtIdNombre").value;

	edad = document.getElementById("txtIdEdad").value;

	//asigno la concatenación de las variables junto a literales de cadena a una ventana modal
	alert("Usted se llama " + nombre + " y tiene " + edad + " años");
}


/*nueva manera de hacerlo llamada template stream

(variable back tick)

		alert(`Usted se llama ${nombre} y tiene ${edad} años`);

		*/