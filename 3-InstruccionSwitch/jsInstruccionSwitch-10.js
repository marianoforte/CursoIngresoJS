function mostrar()
{
	let estacionIngresada = document.getElementById("txtIdEstacion").value;
	let destinoIngresado = document.getElementById("txtIdDestino").value;

	if(estacionIngresada == "Invierno"){
		switch(destinoIngresado){
			case "Bariloche":
				alert("Se viaja.");
				break;
			default:
				alert("No se viaja.");
				break;
		}
	}
	else if(estacionIngresada == "Verano"){
		switch(destinoIngresado){
			case "Cataratas":
			case "Mar del plata":
				alert("Se viaja.");
				break;
			case "Bariloche":
			case "Cordoba":
				alert("No se viaja.");
				break;
		}
	}
	else if(estacionIngresada == "Otoño"){
		alert("Se viaja.");
	}
	else{
		switch(destinoIngresado){
			case "Bariloche":
				alert("No se viaja.");
				break;
			default:
				alert("Se viaja.");
				break;
		}
	}
}