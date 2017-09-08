

	var circles = [];
	function onKeyDown(event){
		var maxPoint = new Point(view.size.width, view.size.height);
		var randomPoint = Point.random();
		var point = maxPoint*randomPoint ;
		var newCircle = new Path.Circle(point,500);
		newCircle.fillColor = "blue";
		circles.push(newCircle);
		sound.play();
	}

	function onFrame(event){
		for (var i = 0; i < circles.length ; i++) {
			circles[i].fillColor.hue +=1;
			circles[i].scale(.9);
		}
	}



	
	var sound = new Howl({
	  src: ['sounds/1.mp3'];
	});
	
	var soundId = 1
	var sound = new Howl({
	  src: ['sounds/'+ soundId + '.mp3'];
	});
	







//for (var x = 0; x < 1000; x+=100) {
//for (var y = 0; y < 1000; y+=100) {
	
//	}
//}
