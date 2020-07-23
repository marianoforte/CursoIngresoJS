/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
let eleccionMaquina;

function comenzar()
{
    eleccionMaquina = Math.round(Math.random() * 2 + 1);


}//FIN DE LA FUNCIÓN
function piedra()
{
	if(eleccionMaquina == 1){
        alert("Usteded ha empatado");
    }
    else if(eleccionMaquina == 2){
        alert("Lo siento, ha perdido");
    }
    else{
        alert("Usted es el ganador!");
    }

}//FIN DE LA FUNCIÓN
function papel()
{
    if(eleccionMaquina == 1){
        eleccionMaquina = Math.round(Math.random() * 2 + 1);
        alert("Usted es el ganador!");
    }
    else if(eleccionMaquina == 2){
        eleccionMaquina = Math.round(Math.random() * 2 + 1);
        alert("Usteded ha empatado");
    }
    else{
        eleccionMaquina = Math.round(Math.random() * 2 + 1);
        alert("Lo siento, ha perdido");
    }

}//FIN DE LA FUNCIÓN
function tijera()
{
	if(eleccionMaquina == 1){
        eleccionMaquina = Math.round(Math.random() * 2 + 1);
        alert("Lo siento, ha perdido");
    }
    else if(eleccionMaquina == 2){
        eleccionMaquina = Math.round(Math.random() * 2 + 1);
        alert("Usted es el ganador!");
    }
    else{
        eleccionMaquina = Math.round(Math.random() * 2 + 1);
        alert("Usteded ha empatado");
    }

}//FIN DE LA FUNCIÓN