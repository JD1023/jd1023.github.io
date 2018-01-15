$(document).ready(function(){



var url = "https://wind-bow.glitch.me/twitch-api/streams/";
var users = ["ESL_SC2", "OgamingSC2", "esl_csgo", "freecodecamp", "swifty", "nico", "moiradelina", "joshog"];



for (var i=0; i < users.length; i++) {
  var api= url+users[i];



  $.getJSON(api,function(data){

    var channel = data.stream;

    if(channel == null){
      var last= data._links.channel.split("/");
     var name = last[last.length-1];
    var logo = "https://media.psu.com/media/articles/15-06-16-05-19_0_large_miku.jpg";
    var status = "Offline";
    var link = "https://www.twitch.tv/directory";
    }else{
    var link = data.stream.channel.url;
    var name = data.stream.channel.name;
    var logo = data.stream.channel.logo;
    var status = data.stream.channel.status;
  }



    var content = "<hr width=90% ><div class = 'row text-center'><div class = 'col-md-4' ><img src="+logo+"></div><div class = 'col-md-4 name' ><a href="+link+">"+name+"<a/></div><div class = 'col-md-4 status' >"+status+"</div><div>";

    $("#content").append(content);


    console.log(link);


  });



};




});
