//Dos superheroes con Vida (objeto), modificador de golpe(fuerza) y nombre
var scKeeper1 =document.querySelector(".counterP1");
var scKeeper2 =document.querySelector(".counterP2");
var incrementP1 = document.querySelector(".addP1");
var incrementP2 = document.querySelector(".addP2");
var gameOn = true;

var vader ={
	nombre:"Darth Vader",
	vida:5000,
	fuerza: 3,
}
var luke ={
	nombre:"Luke Skywalker",
	vida:2500,
	fuerza: 6,
}

//Generador de golpe aleatorio (funcion), genera un valor en funcion de la fuerza del heroe..
var golpear = function (fuerza){
	var golpe = (Math.floor((Math.random() * 100) + 1))*fuerza; 
	return golpe;
}

 //If yes: Quien golpea primero ? ==>call random generator que devuele quien es el mayor
 //	primero = posicion 1 del array superheroes;
 //	segundo = posicion 2 del array;

// mientras vida de 1 y vida 2 sea distinto de 0, ejecutar golpe a golpe
//var initLuchas = prompt("Empezar Lucha Y/N");
while(gameOn){
	var golpeluke = golpear (luke.fuerza);
	var golpeVader = golpear (vader.fuerza);

	//golpes de Luke
	if(vader.vida - golpeluke <= 0){  
		vader.vida = vader.vida - golpeluke;
		scoreP1 = 0;
		scKeeper1.textContent = scoreP1	
		scKeeper2.style.color = "green" ;
		document.body.style.backgroundColor = "green";
		console.log(" Luke golpea con su lightsaber por " + golpeluke + ", Vader cae inerte al vacio.");
		break;
	}
	if(vader.vida - golpeluke > 0){  
		vader.vida = vader.vida - golpeluke;
		scoreP1 = vader.vida;
		scKeeper1.textContent = scoreP1	
		console.log(" Luke golpea con su lightsaber por " + golpeluke + ", Vader queda en " + vader.vida );
	}

	//golpes de Vader
	if(luke.vida - golpeVader <= 0){  
		luke.vida = luke.vida - golpeVader;
		scoreP2 = 0;
		scKeeper2.textContent = scoreP2;
		scKeeper1.style.color = "red" ;
		document.body.style.backgroundColor = "red";
		console.log(" Vader golpea con su lightsaber por " + golpeVader + ", Luke cae inerte al vacio.");
		break;
	}
	if(luke.vida - golpeVader > 0){
		luke.vida = luke.vida - golpeVader
		scoreP2 = luke.vida;
		scKeeper2.textContent = scoreP2;
		console.log(" Vader golpea con su lightsaber por " + golpeVader + ", Luke queda en " + luke.vida );
	}

}







