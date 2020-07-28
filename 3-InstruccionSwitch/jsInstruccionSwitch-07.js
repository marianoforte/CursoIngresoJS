function mostrar()
{
	let destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(destinoIngresado)
	{
		case "Bariloche":
				alert("Oeste");
				break;
		case "Cataratas":
				alert("Norte");
				break;
		case "Mar del plata":
				alert("Este");
				break;
		case "Ushuaia":
				alert("Sur");
				break;
	}
}//FIN DE LA FUNCIÓN