/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let total;

    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);

    total = ((largo + ancho) * 2) * 3;

    alert("Usted necesita " + total + " metros de alambre");

}
function Circulo () 
{
    let radio;
    let total;
    const PI = Math.PI;
    
    radio = parseFloat(document.getElementById("txtIdRadio").value);
    
    total = ((2 * PI) * radio) * 3;

    alert("Usted necesita " + total.toFixed(2) + " metros de alambre");
}
function Materiales () 
{
    let largo;
    let ancho;
    let area;
    let cemento;
    let cal;

    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);

    area = largo * ancho;
    cemento = area * 2;
    cal = area *3;

    alert(`Para un contrapiso de ${area}m2 necesito comprar ${cemento} bolsas de cemento y ${cal} bolsas de cal`);

    
}