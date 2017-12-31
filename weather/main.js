$(document).ready(function() {



  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  var api = "http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid=aa5b7233c020e79895acdff601c9ab2c"



  $.getJSON(api,function(data) {
      var tempk = data.main.temp;
    var tempf = Math.round((tempk)*(9/5) - 459.67);
    var tempc = Math.round((tempk) - 273.15);
    var wind = data.wind.speed;
    var country = data.sys.country;
    var city = data.name;
    var weather = data.weather[0].description;
    var icon = data.weather[0].icon;



    $("#temp").html(tempf);
      $("#wind").html(wind);
        $("#country").html(country);
         $("#city").html(city);
         $("#weather").html(weather);
        $("img").attr('src', 'http://openweathermap.org/img/w/'+icon+'.png');


    switch (icon) {
      case "10n": $(".container-fluid").css("background-image", "url(https://images.unsplash.com/photo-1434118489318-42a0e62c6235?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb)");

        break;
      default:

    }


  });


  });
  }



});
