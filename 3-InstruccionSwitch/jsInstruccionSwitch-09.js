function mostrar()
{
	let estacionIngresada = document.getElementById("txtIdEstacion").value;
	let destinoIngresado = document.getElementById("txtIdDestino").value;
	let precioBase = 15000;
	let porcentaje;
	let precioFinal;

	if(estacionIngresada == "Invierno"){
		switch(destinoIngresado)
		{
			case "Bariloche":
					porcentaje = (precioBase * 20) / 100;
					precioFinal = precioBase + porcentaje;
					break;
			case "Cataratas":
			case "Cordoba":
					porcentaje = (precioBase * 10) / 100;
					precioFinal = precioBase - porcentaje;
					break;
			case "Mar del plata":
					porcentaje = (precioBase * 20) / 100;
					precioFinal = precioBase - porcentaje;
					
					break;
		}
	}
	else if(estacionIngresada == "Verano"){
		switch(destinoIngresado)
		{
			case "Bariloche":
					porcentaje = (precioBase * 20) / 100;
					precioFinal = precioBase - porcentaje;
					break;
			case "Cataratas":
			case "Cordoba":
					porcentaje = (precioBase * 10) / 100;
					precioFinal = precioBase + porcentaje;
					break;
			case "Mar del plata":
					porcentaje = (precioBase * 20) / 100;
					precioFinal = precioBase + porcentaje;
					break;		
		}
	}
	else{
		switch(destinoIngresado)
		{
			case "Bariloche":
			case "Cataratas":
			case "Mar del plata":
					porcentaje = (precioBase * 10) / 100;
					precioFinal = precioBase + porcentaje;
					break;
			case "Cordoba":
					precioFinal = precioBase;
					break;			
		}
	}
	alert("El precio total es de: " + precioFinal);
}