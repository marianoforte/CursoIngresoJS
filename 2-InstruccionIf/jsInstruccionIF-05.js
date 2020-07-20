function mostrar()
{
	//tomo la edad  

	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad>="18" || edad<="12"){
		alert("No eres adolescente");
	}

	
}//FIN DE LA FUNCIÓN