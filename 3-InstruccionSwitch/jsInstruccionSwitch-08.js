function mostrar()
{
	let destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(destinoIngresado)
	{
		case "Bariloche":
				alert("En invierno hace frío y en verano está templado.");
				break;
		case "Cataratas":
				alert("Hace calor todo el año.");
				break;
		case "Mar del plata":
				alert("En verano hace calor, en invierno hace frío.");
				break;
		case "Ushuaia":
				alert("Hace frío todo el año.");
				break;
			}
}//FIN DE LA FUNCIÓN