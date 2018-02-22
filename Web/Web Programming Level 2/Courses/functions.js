function factorial(numb){
	var result = 1;
	for(var i = 2 ; i <= numb ; i++) {
	 result = result * i ;
	}
	return result;
}


function replacer(str) {
	var newStr = str.replace(/-/g, "_");
	return newStr;
}






