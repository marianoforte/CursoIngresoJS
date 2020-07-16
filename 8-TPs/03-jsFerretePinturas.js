/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let temperatura;
    let celsius;

    temperatura = parseFloat(document.getElementById("txtIdTemperatura").value);

    celsius = (temperatura - 32) * 0,55556; 

    alert("Son " + conversion + "º Centígrados");
}

function CentigradosFahrenheit () 
{
    let temperatura;
    let fahrenheit;

    fahrenheit = parseFloat(document.getElementById("txtIdTemperatura").value);

    grados = (temperatura * 0,55556) + 32;

    alert("Son " + grados + "º Fahreinheit");
    
}
