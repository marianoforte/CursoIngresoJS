function mostrar()
{
	//tomo la hora
	let horaDelDia = document.getElementById("txtIdHora").value;

	if(horaDelDia >=7 && horaDelDia <=11)
	{
		alert("Es de mañana.");
		break;
	}
	else if(horaDelDia >=12 && horaDelDia <=19){
		alert("Es de tarde.");
		break;
	}
	else if(horaDelDia >= 20 && horaDelDia <= 24){
		alert("Es de noche.");
			break;
	}
	else if(horaDelDia >= 0 && horaDelDia >= 6){
			alert("Es de noche.");
			break;
	}
	else{
		alert("La hora no existe.");
	}
	

}//FIN DE LA FUNCIÓN