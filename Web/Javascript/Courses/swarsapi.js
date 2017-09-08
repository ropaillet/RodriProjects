var arrResults = [];
var urlInicial = 'http://swapi.co/api/starships/' 

getData()

function getData (){
    $.ajax({
      url: ''+urlInicial+'',
      type: 'get',
      dataType: 'json',
      success: function(data){
        for (var i = 0; i < data.results.length ; i++) {
            arrResults.push(data.results[i]);
          }
        urlInicial = data.next
        keepGathering()
      }
    })
};

function keepGathering (){
  if( urlInicial !== null){
    getData()
  }else{
    showResults()
  }
}

function showResults (){
  for (var i = 0 ; i < arrResults.length ; i++){ 
        $('.allStarships').append('<tr>'+
          '<td>'+arrResults[i].name+'</td>'+
          '<td>'+arrResults[i].model+'</td>'+
          '<td>'+arrResults[i].cost_in_credits+'</td>'+
          '<td>'+arrResults[i].hyperdrive_rating+'</td>'+
          '<td>'+arrResults[i].manufacturer+'</td>'+
          '</tr>')
}}
  