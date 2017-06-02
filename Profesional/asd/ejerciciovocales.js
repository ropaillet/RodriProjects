var inputa = document.querySelector(".inputa");
var outputa = document.querySelector(".outputa");
var submitButt = document.querySelector(".submitButt");
var inputMessage = document.querySelector(".inputMessage");
var vocales = ["a","e","i","o","u"];
var primerA = 0;
var cantidadVocales = 0;
var palabrasHistoricas = [];
var primeraABox = document.querySelector(".primeraABox");
var cantidadVocalesBox = document.querySelector(".cantidadVocalesBox");
var palabrasHistoricasBox = document.querySelector(".palabrasHistoricasBox");

function processtext(event){
	if (inputa.value > 5 || isNaN(inputa.value) ) {
		outputa.value = inputa.value.toLowerCase().replace(/\s/g, '');
		debugger
		contadorVocales(inputa.value);
		palabrasHistoricas.push(outputa.value);
		palabrasHistoricas.textContent = palabrasHistoricas;
	} else {
		inputMessage.textContent = "Por favor ingrese una palabra con mas de 5 caracteres y sin numeros"
		inputMessage.style.color = "red"
		break
	} 
	event.preventDefault()
}

function contadorVocales(palabra){
	for (var i = 0 ; i < palabra.length ; i++) {
		if(vocales.indexOf(palabra[i]) >= 0) {
			if( palabra[i] == "a" & primerA == 0){
				primeraABox.textContent = i ;
				primerA =1;
			}
			cantidadVocales ++
		}
	}
	cantidadVocalesBox.textContent = cantidadVocales;
	return cantidadVocales;
}

submitButt.addEventListener("click",processtext);







