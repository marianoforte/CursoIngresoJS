function mostrar()
{
	let numero;
	for( ; numero=9; ){
		let numero = parseInt(prompt("Ingrese un número"));
		if(numero==9){
			continue;
		}
		alert("Usted ingresó el número: " + numero)
	}
}