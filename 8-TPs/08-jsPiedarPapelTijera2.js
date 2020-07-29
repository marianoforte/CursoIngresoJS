let eleccionMaquina;
let ContadorDeEmpates=0;
let ContadorDeGanadas=0;
let ContadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	 	
	eleccionMaquina = Math.round(Math.random() * 2 + 1);

}
function piedra()
{
	if(eleccionMaquina == 1){
		ContadorDeEmpates++;
		eleccionMaquina = Math.round(Math.random() * 2 + 1);
        alert("Usteded ha empatado");
    }
    else if(eleccionMaquina == 2){
		ContadorDePerdidas++;
		eleccionMaquina = Math.round(Math.random() * 2 + 1);
        alert("Lo siento, ha perdido");
    }
    else{
		ContadorDeGanadas++;
		eleccionMaquina = Math.round(Math.random() * 2 + 1);
        alert("Usted es el ganador!");
	}
	document.getElementById("txtIdGanadas").value = ContadorDeEmpates;
	document.getElementById("txtIdPerdidas").value = ContadorDeGanadas;
	document.getElementById("txtIdEmpatadas").value = ContadorDePerdidas;

}
function papel()
{
	if(eleccionMaquina == 1){
		ContadorDeGanadas++;
		eleccionMaquina = Math.round(Math.random() * 2 + 1);
        alert("Usted es el ganador!");
    }
    else if(eleccionMaquina == 2){
		ContadorDeEmpates++;
		eleccionMaquina = Math.round(Math.random() * 2 + 1);
        alert("Usteded ha empatado");
    }
    else{
		ContadorDePerdidas++;
		eleccionMaquina = Math.round(Math.random() * 2 + 1);
        alert("Lo siento, ha perdido");
	}
	document.getElementById("txtIdGanadas").value = ContadorDeEmpates;
	document.getElementById("txtIdPerdidas").value = ContadorDeGanadas;
	document.getElementById("txtIdEmpatadas").value = ContadorDePerdidas;
	
}
function tijera()
{
	if(eleccionMaquina == 1){
		ContadorDePerdidas++;
		eleccionMaquina = Math.round(Math.random() * 2 + 1);
        alert("Lo siento, ha perdido");
    }
    else if(eleccionMaquina == 2){
		ContadorDeGanadas++;
		eleccionMaquina = Math.round(Math.random() * 2 + 1);
        alert("Usted es el ganador!");
    }
    else{
		ContadorDeEmpates++;
		eleccionMaquina = Math.round(Math.random() * 2 + 1);
        alert("Usteded ha empatado");
	}
	document.getElementById("txtIdGanadas").value = ContadorDeEmpates;
	document.getElementById("txtIdPerdidas").value = ContadorDeGanadas;
	document.getElementById("txtIdEmpatadas").value = ContadorDePerdidas;
	
}

function mostrarResultado()
{
	
}