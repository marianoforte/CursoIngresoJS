function mostrar()
{
	//tomo la edad  
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad >= "18")
	{
		alert("Eres mayor de edad");
	}

	if (edad >= "13" && edad <= "17")
	{
		alert("Eres un adolescente");
	}

	if (edad <"13")
	{
		alert("Eres un niño");
	}


}//FIN DE LA FUNCIÓN