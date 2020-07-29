/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let contador = 0;
	let minimo = 0;
    let maximo = 0;   
	let respuesta ='si';
	let numero;
   
   while(respuesta!='no'){
      contador++;
      numero = parseInt(prompt("Ingrese un número"));
	  respuesta = prompt("Desea continuar? Escriba 'si' para continuar, 'no' para salir");
	  
	  if(contador == 1){
         maximo = numero;
         minimo = numero;
     	}
	  if(contador >1 && numero > maximo){
			maximo = numero;
		}
	  if (contador > 1 && numero < minimo){
		  minimo = numero;
		}
   }
      document.getElementById("txtIdMaximo").value = maximo;
      document.getElementById("txtIdMinimo").value = minimo;
}
//FIN DE LA FUNCIÓN