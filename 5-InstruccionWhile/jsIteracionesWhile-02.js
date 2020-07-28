/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	let contador
	contador = 10

	while(contador>0)
	{
		alert("Número: " + contador);
		contador = contador--;
	}

}//FIN DE LA FUNCIÓN