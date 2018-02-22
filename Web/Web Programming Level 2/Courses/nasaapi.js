var imagenes = {
  titles : [] ,
  urls : [] ,
}
var photoDate = generarFecha()
var urlInicial = 'https://api.nasa.gov/planetary/apod?date='+photoDate+'&hd=true&api_key=eMiVohDtX6OFJbGZ1aPNeyqzHPRq8onidJixAfb4' 
getData()

function getData (){
    $.ajax({
      url: urlInicial,
      type: 'get',
      dataType: 'json',
      success: function(data){
        console.log(data)
        imagenes.titles.push(data.title)
        imagenes.urls.push(data.url)
        showResults()
      }
    })
};

function showResults (){
  for (var i = 0 ; i < imagenes.titles.length ; i++){ 
        $('.allImages').append('<h1>'+imagenes.titles[i]+
          '</h1><br><img src='+imagenes.urls[i]+'>'
        )
}}

function generarFecha () {
  var year = randomYear();
  var month = randomMonth();
  var day = randomDay();
  if(month <10){
    month = '0' + month
  }
  if (month == 0){
    month = '04'
  }
  if(day <10){
    day = '0' + day
  }
  if (day == 0){
    day = '01'
  }
  return (year +'-'+ month +'-'+ day );
}

function randomDay() {
  return Math.round(Math.random() * 30);
};

function randomMonth() {
  return Math.round(Math.random() * 12);
};

function randomYear() {
   var baseYear = Math.round(Math.random() * 7);
   return 2010 + baseYear;
}