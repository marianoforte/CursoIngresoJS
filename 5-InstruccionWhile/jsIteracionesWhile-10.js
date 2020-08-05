/*
Al presionar el botón pedir números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */

function mostrar() {

  let array = [];
  let numeros = 0;
  let respuesta;

  array[0] = 0; //sumaPositivos
  array[1] = 0; //sumaNegativos
  array[2] = 0; //ceros
  array[3] = 0; //numerosPares
  array[4] = 0; //contadorPositivos
  array[5] = 0; //contadorNegativos
  array[6] = 0; //promedioPositivos
  array[7] = 0; //promedioNegativos

  do {
    numeros = parseFloat(prompt("Ingrese un número"));
    if (numeros >= 0) {
      array[0] += numeros;
      array[4]++;
    }
    else if (numeros < 0) {
      array[1] += numeros;
      array[5]++;
    }
    else {
      array[2]++;
    }
    if (numeros % 2 == 0) {
      array[3]++;
    }
    respuesta = prompt("Si desea continuar ingresando números ingrese 's'");
  } while (respuesta == "s");

  if(array[4] != 0 && array[5] != 0){
    array[6] = array[0] / array[4];
    array[7] = array[1] / array[5];
  }

  document.write("<h1>Resultados:</h1></br>");
  document.write("1- La suma de los números negativos es :" + array[1] + "</br>");
  document.write("2- La suma de los números positivos es :" + array[0] + "</br>");
  document.write("3- Cantidad de números positivos :" + array[4] + "</br>");
  document.write("4- Cantidad de números negativos :" + array[5] + "</br>");
  document.write("5- Hay " + array[2] + " ceros." + "</br>");
  document.write("6- La cantidad de números pares es: " + array[3] + "</br>");
  document.write("7- El promedio entre los números positivos es: " + array[6] + "</br>");
  document.write("8- El promedio entre los números negativos es: " + array[7] + "</br>");
  document.write("9- La diferencia entre números positivos y negativos es: " + (array[0] - array[1]) + "</br>");
}