/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “Usted es un Psíquico”.
2° intento: “Excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “Usted está en la media”.
Desde  6 Intentos hasta 10:”Falta técnica”
Más de 10 intentos: “Afortunado en el amor!!”.*/

let numeroSecreto;
let numeroIngresado = 0;
let contadorIntentos = 0;
let condicion = 0;

function comenzar()
{
  //Genero el número RANDOM entre 1 y 100
  numeroSecreto = Math.round(Math.random() * 99 + 1);
  alert("Numero secreto generado");
  document.getElementById("txtIdIntentos").value = contadorIntentos;
  document.getElementById("txtIdNumero").focus();
  condicion = 1;
}

function verificar()
{
  if(condicion == 0){
    alert("Primero debe presionar el botón Comenzar");
  }
  else{
    contadorIntentos++;
    numeroIngresado = parseInt(document.getElementById("txtIdNumero").value);
    alert("Verificando");

      if(numeroSecreto == numeroIngresado){
		switch(contadorIntentos){
			case 1:{
				alert("Usted es un Psiquico");
				condicion = 0;
				contadorIntentos = 0;
				break;
			}
			case 2:{
				alert("Excelente percepción");
				condicion = 0;
				contadorIntentos = 0;
				break;
			}
			case 3:{
				alert("Esto es suerte");
				condicion = 0;
				contadorIntentos = 0;
				break;
			}
			case 4:{
				alert("Excelente técnica");
				condicion = 0;
				contadorIntentos = 0;
				break;
			}
			case 5:{
				alert("Usted está en la media");
				condicion = 0;
				contadorIntentos = 0;
				break;
			}
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:{
				alert("Falta técnica");
				condicion = 0;
				contadorIntentos = 0;
				break;
			}
			default:{
				alert("Afortunado en el amor!!");
				condicion = 0;
				contadorIntentos = 0;
				break;
			}
		};
      }
    else if(numeroSecreto > numeroIngresado){
    	alert("Falta...");
    }
    else{
    	alert("Se pasó...");
    }
	}
  document.getElementById("txtIdNumero").focus();
  document.getElementById("txtIdIntentos").value = contadorIntentos;
}