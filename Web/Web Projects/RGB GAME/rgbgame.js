var resultBoxEasy;
var resultBoxHard;
var resultColor;
var resultColorToDisplay;
var gameOn;
var score = 0 ;
var scoreDisplay = document.querySelector(".score");
var resultColorDisplay = document.querySelector(".colorToFind") ;
var gameAlert = document.querySelector(".alert") ;
var eachBoxHard = document.querySelectorAll(".box");
var eachBoxEasy = document.querySelectorAll(".easy");
var restartButt = document.querySelector(".restart");
var optionsButt = document.querySelectorAll(".options div");
var easyMode = document.querySelector(".easyMode");
var hardMode = document.querySelector(".hardMode");
var titleBack = document.querySelector(".title");

easyMode.addEventListener("click",InitializeEasy);
hardMode.addEventListener("click",initializeHard);
restartButt.addEventListener("click",function(){
	score += 0 ;
	scoreDisplay.textContent = score ;
	initializeHard();
});

InitializeEasy();

function initializeCommon(){
	gameOn = true;
	gameAlert.textContent = "" ;
	titleBack.style.backgroundColor = "rgb(0, 113, 226)";
	resultColor = randomRGBColor();
	resultColorToDisplay = resultColor.substring(3);
	resultColorDisplay.textContent = resultColorToDisplay ;
}

function initializeHard (){
	initializeCommon();
	easyMode.classList.remove("optionsClick");
	hardMode.classList.toggle("optionsClick");
	resultBoxHard = randomResultBoxHard();
	for (var i = 0 ; i < eachBoxHard.length ; i++) {
		eachBoxHard[i].style.backgroundColor = randomRGBColor();
		eachBoxHard[i].addEventListener("click",answerChecker) ;
	}
	eachBoxHard[resultBoxHard].style.backgroundColor = resultColor;
}

function InitializeEasy (){
	initializeCommon();
	easyMode.classList.toggle("optionsClick");
	hardMode.classList.remove("optionsClick");
	resultBoxEasy = randomResultBoxEasy();
	for (var i = 0; i < eachBoxHard.length ; i++) {
		eachBoxHard[i].style.backgroundColor = "black" ;
	}
	for (var i = 0 ; i < eachBoxEasy.length ; i++) {
		eachBoxEasy[i].style.backgroundColor = randomRGBColor();
		eachBoxEasy[i].addEventListener("click",answerChecker) ;
	}
	eachBoxEasy[resultBoxEasy].style.backgroundColor = resultColor;
}

function answerChecker(){
	var boxColor = this.style.backgroundColor;
	if (gameOn){
		if ( boxColor == resultColor) {
			gameAlert.textContent = " You got it right rookie" ;
			gameAlert.style.color = "rgb(5, 255, 100)" ;
			gameOn = false;
			score += 15 ;
			scoreDisplay.textContent = score ;
			gameOn = false;
			for (var i = 0; i < eachBoxHard.length; i++) {
				if (eachBoxHard[i].style.backgroundColor = "black") {
					eachBoxHard[i].style.backgroundColor = resultColor ;
					titleBack.style.backgroundColor = resultColor ;	
				}
			}
		} else {
			gameAlert.textContent = " Try Another One" ;
			gameAlert.style.color = "red" ;
			this.style.backgroundColor = "black" ;
		}	
	}
	
}

// randomly creates the result box out of 10 possible
function randomResultBoxHard() {
	return Math.round(Math.random() * 9);
};

function randomResultBoxEasy() {
	return Math.round(Math.random() * 2);
};

//generador de colores RGB.
function randomRGBComponent() {
	return Math.round(Math.random() * 255);
}

function randomRGBColor() {
	var r = randomRGBComponent();
	var g = randomRGBComponent();
	var b = randomRGBComponent();
	return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}


