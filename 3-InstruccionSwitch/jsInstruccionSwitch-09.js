function mostrar()
{
	let estacionIngresada = document.getElementById("txtIdEstacion").value;
	let destinoIngresado = document.getElementById("txtIdDestino").value;
	let precioBase = "15000";
	let porcentaje;
	let precioFinal;

	precioBase = parseInt(precioBase);

	if(estacionIngresada == "Invierno")
	{
		switch(destinoIngresado)
		{
			case "Bariloche":
				{
					porcentaje = (precioBase * 20) / 100;
					precioFinal = precioBase + porcentaje;
					alert("El precio total es de: " + precioFinal);
					break;
				}
			case "Cataratas":
				{
					porcentaje = (precioBase * 10) / 100;
					precioFinal = precioBase - porcentaje;
					alert("El precio total es de: " + precioFinal);
					break;
				}
			case "Mar del plata":
				{
					porcentaje = (precioBase * 20) / 100;
					precioFinal = precioBase - porcentaje;
					alert("El precio total es de: " + precioFinal);
					break;
				}
			case "Cordoba":
				{
					porcentaje = (precioBase * 10) / 100;
					precioFinal = precioBase - porcentaje;
					alert("El precio total es de: " + precioFinal);
					break;
				}
			
		}
	}
	
	else if(estacionIngresada == "Verano")
	{
		switch(destinoIngresado)
		{
			case "Bariloche":
				{
					porcentaje = (precioBase * 20) / 100;
					precioFinal = precioBase - porcentaje;
					alert("El precio total es de: " + precioFinal);
					break;
				}
			case "Cataratas":
				{
					porcentaje = (precioBase * 10) / 100;
					precioFinal = precioBase + porcentaje;
					alert("El precio total es de: " + precioFinal);
					break;
				}
			case "Mar del plata":
				{
					porcentaje = (precioBase * 20) / 100;
					precioFinal = precioBase + porcentaje;
					alert("El precio total es de: " + precioFinal);
					break;
				}
			case "Cordoba":
				{
					porcentaje = (precioBase * 10) / 100;
					precioFinal = precioBase + porcentaje;
					alert("El precio total es de: " + precioFinal);
					break;
				}
			
		}
	}

	else
	{
		switch(destinoIngresado)
		{
			case "Bariloche":
				{
					porcentaje = (precioBase * 10) / 100;
					precioFinal = precioBase + porcentaje;
					alert("El precio total es de: " + precioFinal);
					break;
				}
			case "Cataratas":
				{
					porcentaje = (precioBase * 10) / 100;
					precioFinal = precioBase + porcentaje;
					alert("El precio total es de: " + precioFinal);
					break;
				}
			case "Mar del plata":
				{
					porcentaje = (precioBase * 10) / 100;
					precioFinal = precioBase + porcentaje;
					alert("El precio total es de: " + precioFinal);
					break;
				}
			case "Cordoba":
				{
					precioFinal = precioBase;
					alert("El precio total es de: " + precioFinal);
					break;
				}
			
		}
	}
	
	

}//FIN DE LA FUNCIÓN