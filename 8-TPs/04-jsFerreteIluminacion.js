/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos e informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    const PRECIO = 35;
    let cantidadLamp = document.getElementById("txtIdCantidad").value;
    let marca = document.getElementById("Marca").value;
    let precioTotal = PRECIO * cantidadLamp;
    let descuento;
    let ingresosbrutos;
    let precioFinal;

    if(cantidadLamp >= 6){
        descuento = (precioTotal) * 0.5;
        precioFinal = precioTotal - descuento;
        document.getElementById("txtIdprecioDescuento").value = ("El precio por unidad es de: " + precioFinal / cantidadLamp);
        alert("El precio final con descuento es: " + precioFinal);
    }
    else if(cantidadLamp == 5){
        switch(marca){
            case "ArgentinaLuz":
                {
                    descuento = (precioTotal) * 0.4
                    precioFinal = precioTotal - descuento;
                    document.getElementById("txtIdprecioDescuento").value = ("El precio por unidad es de: " + precioFinal / cantidadLamp);
                    alert("El precio final con descuento es: " + precioFinal);
                    break;
                }
            default:
                {
                    descuento = (precioTotal) * 0.3
                    precioFinal = precioTotal - descuento;
                    document.getElementById("txtIdprecioDescuento").value = ("El precio por unidad es de: " + precioFinal / cantidadLamp);
                    alert("El precio final con descuento es: " + precioFinal);
                    break;
                }
        }
    }
    else if(cantidadLamp == 4){
        switch(marca){
            case "ArgentinaLuz":
            case "FelipeLamparas":
                {
                    descuento = (precioTotal) * 0.25;
                    precioFinal = precioTotal - descuento;
                    document.getElementById("txtIdprecioDescuento").value = ("El precio por unidad es de: " + precioFinal / cantidadLamp);
                    alert("El precio final con descuento es: " + precioFinal);
                    break;
                }
            default:
                {
                    descuento = (precioTotal) * 0.2;
                    precioFinal = precioTotal - descuento;
                    document.getElementById("txtIdprecioDescuento").value = ("El precio por unidad es de: " + precioFinal / cantidadLamp);
                    alert("El precio final con descuento es: " + precioFinal);
                    break;
                }
            }
    }
    else if(cantidadLamp == 3){
        switch(marca){
            case "ArgentinaLuz":
                {
                    descuento = (precioTotal) * 0.15;
                    precioFinal = precioTotal - descuento;
                    document.getElementById("txtIdprecioDescuento").value = ("El precio por unidad es de: " + precioFinal / cantidadLamp);
                    alert("El precio final con descuento es: " + precioFinal);
                    break;
                }
            case "FelipeLamparas":
                {
                    descuento = (precioTotal) * 0.1;
                    precioFinal = precioTotal - descuento;
                    document.getElementById("txtIdprecioDescuento").value = ("El precio por unidad es de: " + precioFinal / cantidadLamp);
                    alert("El precio final con descuento es: " + precioFinal);
                    break;
                }
            default:
                {
                    descuento = (precioTotal) * 0.05;
                    precioFinal = precioTotal - descuento;
                    document.getElementById("txtIdprecioDescuento").value = ("El precio por unidad es de: " + precioFinal / cantidadLamp);
                    alert("El precio final con descuento es: " + precioFinal);
                    break;
                }
        }
    }
    else{
        precioFinal = PRECIO * cantidadLamp;
        document.getElementById("txtIdprecioDescuento").value = ("El precio por unidad es de: " + precioFinal / cantidadLamp);
        alert("El precio final sin descuento es: " + precioFinal);
    }
    
    if(precioFinal > 120){
        ingresosbrutos = precioFinal * 0.2;
        precioFinal = precioFinal + ingresosbrutos;
        alert("Usted pagó " + ingresosbrutos + " de IIBB.")
    }
}
