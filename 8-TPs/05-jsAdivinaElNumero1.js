/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
let numeroSecreto;
let numeroIngresado; 
let contadorIntentos = 0;

function comenzar()
{
  //Genero el número RANDOM entre 1 y 100
  numeroSecreto = Math.round(Math.random() * 99 + 1);
  alert("Numero secreto generado");
}

function verificar()
{
  numeroIngresado = parseInt(document.getElementById("txtIdNumero").value);
  contadorIntentos++;
  
	if(numeroSecreto == numeroIngresado){
    alert("Usted es un ganador!!!");
  }
  else if(numeroSecreto > numeroIngresado){
    alert("Falta...");
  }
  else{
    alert("Se pasó...");
  }
  document.getElementById("txtIdIntentos").value = contadorIntentos;
}