/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	let edad;
 	let sexo;
	let estadoCivil;
	let estadoCivilString;
	let nacionalidad;

	edad = parseInt(prompt("Ingrese una edad entre 18 y 90 años inclusive: "));
	while(edad < 18 || edad > 90 || isNaN (edad)){
		edad = parseInt(prompt("Error. Ingrese una edad entre 18 y 90 años inclusive: "));
	}
	estadoCivil = parseInt(prompt("Ingrese un estado civil: 1- para soltero/a, 2- para casado/a, 3- para divorciado/a, 4- para viudo/a"));
	while (estadoCivil < 1 || estadoCivil > 4 || isNaN(estadoCivil)){
		estadoCivil = parseInt(prompt("Error. Reingrese estado civil: 1- para soltero/a, 2- para casado/a, 3- para divorciado/a, 4- para viudo/a"));
	}
	switch(estadoCivil){
		case 1:
			estadoCivilString = "Soltero/a";
			break;
		case 2:
			estadoCivilString = "Casado/a";
			break;
		case 3:
			estadoCivilString = "Divorciado/a";
			break;
		case 4:
			estadoCivilString = "Viudo/a";
			break;
	}
	document.getElementById("txtIdEdad").value = edad
	document.getElementById("txtIdEstadoCivil").value = estadoCivilString
}
