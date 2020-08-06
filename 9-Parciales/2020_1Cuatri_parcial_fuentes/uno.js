// declaracion de variables

// tengo que generar un bucle que se repite 5 veces
// (tipo, precio, cantidad, marca y fabricante) valido todo segun corresponda
// uso for porque conozco la cantidad de repeticiones

// A- reconocer si el producto es alcohol y recordar el precio, cantidad y fabricante del de menor precio
// B- tengo que calcular la cantidad de unidades de cada tipo y la cantidad tipo de producto
// para sacar el promedio de compra del acumulador mayor
// C- Tengo que acumular la cantidad de jabones

function mostrar()
{
	let cantidad;
	let fabricante;
	let marca;
	let precio;
	let tipo;
	let acumuladorAlcohol = 0;
	let acumuladorBarbijo = 0;
	let acumuladorJabon = 0;
	let cantidadAlcoholBarato;
	let contBarbijo = 0;
	let contAlcohol = 0;
	let contJabon = 0;
	let fabricanteAlcohoBarato;
	let mayorTipo;
	let precioAlcoholBarato;
	let promedioCompra;
	let flagAlcohol = 0;
	let mensajeAlcohol = "No se compraron alcoholes";
	let mensajeB;
	let mensajeJ;

	for(let i = 0; i < 5; i++){

		tipo = prompt('Ingrese tipo "barbijo, "jabon" o "alcohol: "');
		while(tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol"){
			tipo = prompt('Tipo inválido. Ingrese tipo "barbijo, "jabon" o "alcohol: "');
		}
		precio = parseFloat(prompt("Ingrese precio $(100-300)"));
		while(precio < 100 || precio > 300 || isNaN(precio)){
			precio = parseFloat(prompt("Precio inválido. Ingrese precio $(100-300)"));
		}
		cantidad = parseInt(prompt("Ingrese cantidad. Máximo 1000"));
		while(!(cantidad > 0 || cantidad <= 1000)){
			cantidad = parseFloat(prompt("Cantidad inválida. Ingrese cantidad. Máximo 1000"));
		}
		marca = prompt("Ingrese marca: ");
		fabricante = prompt("Ingrese fabricante");
		
		switch(tipo){
			case "alcohol":
				acumuladorAlcohol += cantidad;
				contAlcohol++;

				if(flagAlcohol == 0 || precioAlcoholBarato > precio){
					precioAlcoholBarato = precio;
					cantidadAlcoholBarato = cantidad;
					fabricanteAlcohoBarato = fabricante;
					flagAlcohol = 1;
				}
				break;
			case "barbijo":
				acumuladorBarbijo += cantidad;
				contBarbijo++;
				break;
			case "jabon":
				acumuladorJabon += cantidad;
				contJabon++;
				break;
		}
	}

	if(acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon){
		mayorTipo = "Alcohol";
		promedioCompra = acumuladorAlcohol / contAlcohol;
	}
	else if(acumuladorBarbijo >= acumuladorAlcohol && acumuladorBarbijo > acumuladorJabon){
		mayorTipo = "Barbijo";
		promedioCompra = acumuladorBarbijo / contBarbijo;
	}
	else{
		mayorTipo = "Jabon";
		promedioCompra = acumuladorJabon / contJabon;
	}

	if(flagAlcohol == 1){
		mensajeAlcohol = "Fabricante alcohol barato: " + fabricanteAlcohoBarato + 
		"\nCantidad: " + cantidadAlcoholBarato + 
		"\nPrecio: " + precioAlcoholBarato;
	}
	mensajeB = "B- Tipo con más unidades: " + mayorTipo + " Promedio" + promedioCompra;
	mensajeJ = C- "Unidades de jabon: " + acumuladorJabon;

	alert(mensajeAlcohol + "\n" + mensajeB + "\n" + mensajeJ);
}
