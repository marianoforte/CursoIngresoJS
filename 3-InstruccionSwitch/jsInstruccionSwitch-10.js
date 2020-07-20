function mostrar()
{
	let estacionIngresada = document.getElementById("txtIdEstacion").value;
	let destinoIngresado = document.getElementById("txtIdDestino").value;

	if((estacionIngresada == "Invierno")){
		switch(destinoIngresado)
		{
			case "Bariloche":
				{
					alert("Se viaja.");
					break;
				}
			case "Cataratas":
			case "Mar del plata":
			case "Cordoba":
				{
					alert("No se viaja.");
					break;
				}
		}
	}

	else if((estacionIngresada == "Verano")){
		switch(destinoIngresado)
		{
			case "Cataratas":
			case "Mar del plata":
				{
					alert("Se viaja.");
					break;
				}
			case "Bariloche":
			case "Cordoba":
				{
					alert("No se viaja.");
					break;
				}
		}
	}

	else if((destinoIngresado == "Otoño")){
		switch(destinoIngresado)
		{
			case "Bariloche":
			case "Cataratas":
			case "Mar del plata":
			case "Cordoba":
				{
					alert("Se viaja.");
					break;
				}
		}
	}

	else{
		switch(destinoIngresado)
		{
			case "Cataratas":
			case "Mar del plata":
			case "Cordoba":
				{
					alert("Se viaja.");
					break;
				}
			case "Bariloche":
				{
					alert("No se viaja.");
					break;
				}
		}
	}

}//FIN DE LA FUNCIÓN