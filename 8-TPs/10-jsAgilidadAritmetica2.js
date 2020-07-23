/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */

let numerorandom1;
let numerorandom2;
let operador;
let operacion;
let respuesta;
let suma = 1;
let resta = 2;
let producto = 3;
let division = 4;
let segundos = 4;

function comenzar()
{
    numerorandom1 = Math.round(Math.random() * 9 + 1);
    numerorandom2 = Math.round(Math.random() * 9 + 1);    
    operador = Math.round(Math.random() * 3 + 1);

    if(operador == 1){
        document.getElementById("txtIdOperador").value = "+";
        operacion = numerorandom1 + numerorandom2;
    }
    else if(operador == 2){
        document.getElementById("txtIdOperador").value = "-";
        operacion = numerorandom1 - numerorandom2;
    }
    else if(operador == 3){
        document.getElementById("txtIdOperador").value = "X";
        operacion = numerorandom1 * numerorandom2;
    }
    else{
        document.getElementById("txtIdOperador").value = "/";
        operacion = numerorandom1 / numerorandom2;
    }
    document.getElementById("txtIdPrimerNumero").value = numerorandom1;
    document.getElementById("txtIDSegundoNumero").value = numerorandom2;
    document.getElementById("txtIdRespuesta").focus();

}

function timer() {
    setTimeout(timer(),4000);
}
    if (segundos == 0){ 
    clearInterval(countdownTimer);
    alert("Se acabó el tiempo");
    }
    else { 
    segundos--; 
    }

/*function cuentaRegresiva(){
    seconds--; 
}

    let countdownTimer = setInterval('secondPassed()', 1000);

    if (temporizador == 0) { 
        clearInterval(countdownTimer); 
        alert('Se acabó el tiempo'); 
    }
    else { 
    temporizador--; 
    }
*/

function Responder(){

    respuesta = document.getElementById("txtIdRespuesta").value;
        
    if(respuesta == operacion){
        alert("El resultado es correcto");
    }
    else{
        alert("El resultado es incorrecto");
    }
    document.getElementById("txtIdRespuesta").focus();
}