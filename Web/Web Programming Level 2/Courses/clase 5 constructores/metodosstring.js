//function carConstructor(name){
//	this.peso = peso;
//	this.patente = patente;
//}


//constructor de autos,

//autos con peso y patentes

//camion carga autos, tiene capacidad maxima, valida con cada auto ingresado 
//si tiene capacidad y si la patente no es repetida



//camion debe almacenar en un array
//autos
//patentes	

var vocales = ["a","e","i","o","u"];
var cantidadVocales = 0;
var primerA = 0;

do {
	var palabra = prompt("Inserte un texto mayor a 5 letras y no solo numeros").toLowerCase().replace(/\s/g, '');;
}while (palabra.length < 5 || !isNaN(palabra) );

contadorVocales(palabra);

function contadorVocales(palabra){
	for (var i = 0 ; i < palabra.length ; i++) {
		if(vocales.indexOf(palabra[i]) >= 0) {
			console.log(palabra[i] + "es una vocal");
			if( palabra[i] == "a" & primerA == 0){
				alert("La primera A de la palabra esta en la posicion " + i  );
				primerA =1;
			}
			cantidadVocales ++
		}if(vocales.indexOf(palabra[i]) == -1) {
			console.log(palabra[i] + "no es una vocal");
		}
	}
	return cantidadVocales;
}
alert("La palabra ingresada tiene " + cantidadVocales + " vocales y " + palabra.length + " caracteres.")



