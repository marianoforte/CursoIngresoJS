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
      alert(`Usted es un ganador y en sólo ${contadorIntentos} intentos!!!`);
      condicion = 0;
      contadorIntentos = 0;
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