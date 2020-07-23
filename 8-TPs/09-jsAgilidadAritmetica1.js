/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
let numerorandom1;
let numerorandom2;
let operador;
let operacion;
let respuesta;
let suma = 1;
let resta = 2;
let producto = 3;
let division = 4;

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

}//FIN DE LA FUNCIÓN

function Responder()
{
    respuesta = document.getElementById("txtIdRespuesta").value;
    
    if(respuesta == operacion){
        alert("El resultado es correcto");
    }
    else{
        alert("El resultado es incorrecto");
    }
    document.getElementById("txtIdRespuesta").focus();

}//FIN DE LA FUNCIÓN
