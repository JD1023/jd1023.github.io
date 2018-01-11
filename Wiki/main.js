$(document).ready(function(){

 $("#searchButton").click(function(){

      var searchTerm = $("#searchBox").val();
  var apiLink = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json&callback=?";

  $("#searchBox").val("");


$.getJSON(apiLink,function(data){

  console.log(data);
   $("#results").html("");

  for (i=0;i<data[1].length;i++){
    $("#results").append("<li><a href= "+data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");

  };

});


 });



        $("#searchBox").keypress(function(e){

     if(e.which == 13){
       $("#searchButton").click();
     }
   });


});       
