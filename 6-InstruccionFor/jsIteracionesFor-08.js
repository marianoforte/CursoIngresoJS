function mostrar()
{
	let numero;
	let flag=0;
	let mensaje = " es primo";

	numero = parseInt(prompt("Ingrese un número: "));

	while(isNaN(numero)){
		numero = parseIntprompt("Eso no es un número. Ingrese un número: ");
	}
	for(let i = 2; i < numero; i++){
		if(!(numero % i)){
			flag=1;
			break;
		}
	}
	if(flag || numero <= 1){
		mensaje = " no" + mensaje;
	}
	alert(numero + mensaje);
}