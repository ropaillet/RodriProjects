

//generar 1 random rgb para cada div
// poner el valor de 1 para que la persona averigue

// random RGB GENERATOR


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomInt() {
    var r = getRandomInt(0, 255);
    var g = getRandomInt(0, 255);
    var b = getRandomInt(0, 255);


element.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    document.getElementById("colorvalue").innerHTML = r + " " + g + " " + b;







