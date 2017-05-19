//constructor de autos,
function Car(nombre,patente){
	this.nombre = nombre;
	this.patente = patente;
	this.peso = pesoauto();
}

//funcion pesoauto para calcular el peso del auto, random de 0 a 100
function pesoauto(){
	var peso = (Math.floor((Math.random() * 100) + 1)) *300;
	return peso;
}

//autos con nombre y patentes, el peso es random .
var auto1 = new Car("FOCUS","JK89");
var auto2 = new Car("GOL","JTZ29");
var auto3 = new Car("Fiesta","STZ29");
var auto4 = new Car("MEGANE","AT2Z29");

//camion  tiene capacidad maxima,array de patentes y de autos y peso actual.
var camion = {
	autos:[],
	patentes:[],
	pesoMax : 50000,
	pesoActual : 0,
}

//subo al auto, le paso el nombre, la patente y el peso.
function cargarAutos(auto){
	if (camion.pesoActual + auto.peso > camion.pesoMax && chequeadorPatentes(auto)) {
		console.log("El peso del auto excede la capacidad maxima por " + (-camion.pesoMax ,
		 + (camion.pesoActual + auto.peso)));
	}
	if (camion.pesoActual + auto.peso <= camion.pesoMax && chequeadorPatentes(auto)) {
		exitoCarga(auto);
	}
}

function chequeadorPatentes(auto){
	if (camion.patentes.indexOf(auto.patente) >= 0) {
		console.log("La patente " + auto.patente + " ya se encuentra en el camion, dirigirse a oficina de despachos");
		return false;
	} 
	return true;
}

function exitoCarga(auto){
	camion.pesoActual += auto.peso
	camion.autos.push(auto.nombre);
	camion.patentes.push(auto.patente);
	console.log("Auto Cargado Exitosamente");
	console.log("Modelos Cargados :" + camion.autos);
	console.log("Patentes Cargados :" + camion.patentes);
	console.log("El peso actual es de " + camion.pesoActual + "/" + camion.pesoMax);
}