var scKeeper1 =document.querySelector(".counterP1");
var scKeeper2 =document.querySelector(".counterP2");
var incrementP1 = document.querySelector(".addP1");
var incrementP2 = document.querySelector(".addP2");

var scoreP1 = Number(scKeeper1.textContent);
var scoreP2 = Number(scKeeper2.textContent);

var playingTo = document.querySelector(".playingTo");
var playingToValue = Number(playingTo.textContent);
var setPlayingTo = document.querySelector(".playingToInput") ;
var incrementP1 = document.querySelector(".addP1");
var incrementP2 = document.querySelector(".addP2");
var resetClick = document.querySelector(".resetButt") ;

//valor del input form playing to 
setPlayingTo.addEventListener("change",function(){
	playingToValue = setPlayingTo.value ;
	playingTo.textContent = playingToValue ;
});

//increment p1 en 1 al hacer click
incrementP1.addEventListener("click",function(){
	if (scoreP1 < playingToValue - 1){
		scoreP1 = scoreP1 + 1 ;
		scKeeper1.textContent = scoreP1	
	} else if (scoreP1 = playingToValue - 1) {
		scoreP1 = scoreP1 + 1 ;
		scKeeper1.textContent = scoreP1	
		alert("Congratulations, Player 1 won the match")
		scKeeper1.style.color = "green" ;
		scKeeper2.style.color = "red";
	}
})

//same increment for p2
incrementP2.addEventListener("click",function(){
	if (scoreP2 < playingToValue - 1){
		scoreP2 = scoreP2 + 1 ;
		scKeeper2.textContent = scoreP2
	} else if (scoreP2 = playingToValue - 1) {
		scoreP2 = scoreP2 + 1 ;
		scKeeper2.textContent = scoreP2
		alert("Congratulations, Player 2 won the match")
		scKeeper2.style.color = "green" ;
		scKeeper1.style.color = "red";
	}
})

////reset counters
resetClick.addEventListener("click",function(){
	scoreP1 = 0 ;
	scKeeper1.textContent = scoreP1
	scoreP2 = 0 ;
	scKeeper2.textContent = scoreP2
	scKeeper2.style.color = "black" ;
	scKeeper1.style.color = "black";
})

