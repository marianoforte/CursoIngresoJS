function mostrar()
{
	//tomo la edad  
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad >= "18"){
		alert("Eres mayor de edad");
	}

	else if (edad >= "13" && edad <= "17"){
		alert("Eres un adolescente");
	}

	else{
		alert("Eres un niño");
	}


}//FIN DE LA FUNCIÓN