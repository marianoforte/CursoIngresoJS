/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let fahrenheit;
    let celsius;

    fahrenheit = parseFloat(document.getElementById("txtIdTemperatura").value);
 
    celsius = (fahrenheit - 32) * 5 / 9

    alert("Son " + celsius.toFixed(1) + "º Centígrados");
}

function CentigradosFahrenheit () 
{
    let celsius;
    let fahrenheit;

    celsius = parseFloat(document.getElementById("txtIdTemperatura").value);

    fahrenheit = ((celsius * 9) / 5) + 32

    alert("Son " + fahrenheit.toFixed(1) + "º Fahreinheit");
    
}
