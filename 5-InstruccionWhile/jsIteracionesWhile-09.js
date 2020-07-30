/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	let numero;
	let maximo;
	let minimo;   
	let respuesta;
	let flag = 0;
	
   do{
		numero = parseFloat(prompt("Ingrese un número"));
		if(flag == 0 || numero > maximo){
        	maximo = numero;
     	}
		if(flag == 0 || numero < minimo){
			minimo = numero;
			flag = 1;
		}
		respuesta = prompt("Si desea continuar ingresando números ingrese 's'");
   }while(respuesta == "s");
   
    document.getElementById("txtIdMaximo").value = maximo;
    document.getElementById("txtIdMinimo").value = minimo;
}