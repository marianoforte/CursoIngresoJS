function mostrar()
{
	//tomo la edad  
	
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad>="18")
	{
		alert("Eres mayor de edad");
	}

	if(edad<"18")
	{
		alert("Eres menor de edad");
	}

}//FIN DE LA FUNCIÓN