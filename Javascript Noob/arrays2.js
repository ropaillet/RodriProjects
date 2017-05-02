// imprimir los elementos del array en orden inverso.

function printReverse(arr){
	for (var i = arr.length -1 ; i >= 0; i--) {
		console.log(arr[i]) ;
	}
}

printReverse([1,2,3,4,5]) ;


function isUniform(arr){
	for (var i = 1 ; i < arr.length; i++) {
		if (arr[0] !== arr[i]) {
			i=arr.length ;
			return false ;
		}
	}
	return true;
}

isUniform([3,3,3]) ;
isUniform([3,3,4]) ;
isUniform(['mike',3,3]) ;
isUniform(["mike","mike","mike"]) ;

//summ al ellements in an array of numbers

function sumArray(arr){
	var counter = 0
	for (var i = 0; i < arr.length ; i++) {
		counter = counter + arr[i] ;
	}
	console.log(counter)
}

// return the max in an array

function max(arr){
	var max = arr[0];
	for (var i = 1 ; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	return max;
}
