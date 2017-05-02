// push, adds an element to an array wihtouht needing the last index number

var goals = ["french", "violin"] ;
goals.push("live in brazil") ;


// pop, removes the last element of an array, devuelve lo agrego para pasarlo a una variable como valor
goals.pop

//unshift, agrega al array pero en la primera posicion,

goals.unshift()

//shift, agrega al principio del array
goals.shift(orange)

//indexOf() busca en un array el elemento pedido y devuelve donde esta.
// return -1 if the element is not present

var friends = ["charlie","karl","lizz"] ;
friends.indexOf("Marta") ;
friends.indexOf("charlie") ;

//slice para copiarp artes de un array y hacer otro con los elementos que le digo a traves del index number, creo subdominios del primer dominio 
// al cortarlo en pedazitos
// array.slice()

var friendsA = ['charlie','karl','lizz','karl'] ;
var friendsB = friendsA.slice(0,1,3) ;
var friendsC = friendsA.slice() ;


//array.length : indica la cantidad de elementos en el array.
//listear todos los elementos de un array con un for loop

var friendsA = ['charlie','karl','lizz','karl'] ;

for (var i = 0 ; i < friendsA.length; i++) {
	console.log(friendsA[I=i])
}


// Method...array.ForEach(someFunction)... you pass a function which is applied to every single element in the array
//anonymous function, defined in the same method and only exists for that method.

var friendsA = ['charlie','karl','lizz','karl'] ;

function myFavFriend(friend) {
	console.log("My favourite friends is " + friend) ;
}

friendsA.forEach(myFavFriend) ;





// imprimir los elementos del array en orden inverso.

function printReverse(arr){
	for (var i = arr.length -1 ; i >= 0; i-- ) {
		console.log(array[i]) ;
}