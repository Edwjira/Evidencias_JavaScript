var lanzarB = document.getElementById("boton");
if(lanzarB) lanzarB.addEventListener("click", play, false); // Cada vez que se presione click en él ejecutaremos la función play() que es la que nosmaneja todo el juego
var inicio = true; // Nos indica si tenemos que dar la primera tirada
var punto = false; // Indica si obtuvimos el estado punto
var val = 0; // Guarda el valor del punto obtenido
var res = 0; // Guarda la suma de los dados después de obtener el punto
var d1 = 0; // Guarda el valor que obtenemos para el primer dado
var d2 = 0; // Guarda el valor que obtenemos para el segundo dado
var t2 = document.getElementById("txt"); // Obtenemos el objeto donde escribimos el estado del juego: victoria, derrota o punto

function play() {
	if(inicio){ // Si es la tirada inicial
		inicio = false; // Decimos que ya hicimos la tirada inicial, por lo que este estado pasará a ser falso
		d1 = (Math.floor(Math.random()*100))%6 + 1; // Obetenemos un valor aleatorio entre 1 y 6 para el primer dado
		d2 = (Math.floor(Math.random()*100))%6 + 1; // Obetenemos un valor aleatorio entre 1 y 6 para el primer dado
		val = d1 + d2; // Sumamos el valor de los dados
		
		document.getElementById("d1").src=(d1 + ".png"); // Cambiamos la imagen del dado para que represente el valor que obtuvimos en d1
		document.getElementById("d2").src=(d2 + ".png"); // Cambiamos la imagen del dado para que represente el valor que obtuvimos en d2

		if(val == 2 || val == 3 || val == 12) t2.textContent = "PERDISTE"; // Para la tirada inicial, sacar un 2, 3 o 12 pronostica una derrota
		else if(val == 7 || val == 11) t2.textContent = "GANASTE"; // Para la tirada inicial, sacar un 7, 11 pronostica una victoria
		else{ // Para la tirada inicial, obtener cualquier resultado que no se haya mencionado arriba indica el estado de punto
			punto = true; // Decimos entonces que el estado de punto es cierto
			t2.textContent = "PUNTO = " + val; // Indicamos en pantalla el valor del punto que tenemos que obtener de nuevo para ganar
		}
	}
	else if(punto){ // Si estamos despues de la tirada inicial y en el estado de punto:
		d1 = (Math.floor(Math.random()*100))%6 + 1; // Obetenemos un valor aleatorio entre 1 y 6 para el primer dado
		d2 = (Math.floor(Math.random()*100))%6 + 1; // Obetenemos un valor aleatorio entre 1 y 6 para el primer dado
		res = d1 + d2;

		document.getElementById("d1").src=(d1 + ".png"); // Cambiamos la imagen del dado para que represente el valor que obtuvimos en d1
		document.getElementById("d2").src=(d2 + ".png"); // Cambiamos la imagen del dado para que represente el valor que obtuvimos en d2

		if(res == 7){ // Sacar un 7 en el estado de punto indica una derrota
		t2.textContent = "PERDISTE";
		punto = false; // Decimos entonces que el estado de punto es falso, pues ya acabó el juego
		}
		else if (res == val){ // Sacar el valor del punto en el estado de punto indica una victoria
		t2.textContent = "GANASTE";
		punto = false; // Decimos entonces que el estado de punto es falso, pues ya acabó el juego
		}
	}
}
