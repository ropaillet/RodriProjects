var scKeeper1 =document.querySelector(".counterP1");
var scKeeper2 =document.querySelector(".counterP2");
var incrementP1 = document.querySelector(".addP1");
var incrementP2 = document.querySelector(".addP2");
var gameOn = true;


var mySingleton = (function(){
	var instancia;

	function init(){s
		function crearPersonajes(){   //Crear personajes es un metodo privado//
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
		return {
			vader: vader,
			luke: luke
			}
		}
		//Creado de golpes es un metodo metodo privado//
		//Generador de golpe aleatorio (funcion), genera un valor en funcion de la fuerza del heroe..
		function creadorGolpe(fuerza){   
			var golpe = (Math.floor((Math.random() * 100) + 1))*fuerza; 
			return golpe;
		}

		// mientras vida de 1 y vida 2 sea distinto de 0, ejecutar golpe a golpe
		function jugar(){
			while(gameOn){
				var golpeluke = creadorGolpe(luke.fuerza);
				var golpeVader = creadorGolpe(vader.fuerza);

				//golpes de Luke
				if(vader.vida - golpeluke <= 0){  
					vader.vida -= golpeluke;
					scKeeper1.textContent = 0;
					scKeeper2.style.color = "green" ;
					document.body.style.backgroundColor = "green";
					console.log(" Luke golpea con su lightsaber por " + golpeluke + ", Vader cae inerte al vacio.");
					break;
				}
				if(vader.vida - golpeluke > 0){  
					vader.vida -= golpeluke;
					scKeeper1.textContent = vader.vida;	
					console.log(" Luke golpea con su lightsaber por " + golpeluke + ", Vader queda en " + vader.vida );
				}
				//golpes de Vader
				if(luke.vida - golpeVader <= 0){  
					luke.vida -= golpeVader;
					scKeeper2.textContent = 0;
					scKeeper1.style.color = "red" ;
					document.body.style.backgroundColor = "red";
					console.log(" Vader golpea con su lightsaber por " + golpeVader + ", Luke cae inerte al vacio.");
					break;
				}
				if(luke.vida - golpeVader > 0){
					luke.vida -= golpeVader
					scKeeper2.textContent = luke.vida;
					console.log(" Vader golpea con su lightsaber por " + golpeVader + ", Luke queda en " + luke.vida );
				}
			}
		}
	}
	return {
        crearInstancia: function() {
            if (!instancia) {
                   instancia = init();
               return instancia;
            }
        }
    }
})();

var testeoJuego = mySingleton.crearInstancia();
