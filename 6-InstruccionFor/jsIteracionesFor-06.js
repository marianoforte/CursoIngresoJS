function mostrar()
{
	let numero;
	let pares = 0;

	numero = parseInt(prompt("Ingrese un número"));

	for(let i=1; i<=numero; i++){
		if(i % 2 == 0){
			pares++;
			console.log(i);
		}
	}

	alert("Numeros encontrados: " + pares);


}