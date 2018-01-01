$(document).ready(function() {



  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  var api = "https://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid=aa5b7233c020e79895acdff601c9ab2c"



  $.getJSON(api,function(data) {
      var tempk = data.main.temp;
    var tempf = Math.round((tempk)*(9/5) - 459.67);
    var tempc = Math.round((tempk) - 273.15);
    var wind = data.wind.speed;
    var country = data.sys.country;
    var city = data.name;
    var weather = data.weather[0].description;
    var icon = data.weather[0].icon;



    $("#temp").html(tempc);
      $("#wind").html(wind);
        $("#country").html(country);
         $("#city").html(city);
         $("#weather").html(weather);
        $("img").attr('src', 'http://openweathermap.org/img/w/'+icon+'.png');




        $("#degrees").click(function() {
            if ($("#degrees").html("C")){
                    $("#temp").html(tempf);
                    $("#degrees").html("F");

            }
             else if ($("#degrees").html("F")){

              $("#temp").html(tempc);
              $("#degrees").html("C");

            }

          });


    switch (icon) {
      case "01d" : $(".container-fluid").css("background-image", "url(https://images.unsplash.com/photo-1504321946642-8f661bf96ff0?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb)");
      break;
      case "02d" : $(".container-fluid").css("background-image", "url(https://images.unsplash.com/photo-1505224526312-64368469c1f0?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb)");
      break;
      case "03d" : $(".container-fluid").css("background-image", "url(https://images.unsplash.com/photo-1493130952181-47e36589f64d?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb)");
      break;
      case "04d" : $(".container-fluid").css("background-image", "url(https://images.unsplash.com/photo-1500740516770-92bd004b996e?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb)");
      break;
      case "09d" : $(".container-fluid").css("background-image", "url(https://images.unsplash.com/photo-1486016006115-74a41448aea2?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb)");
      break;
      case "10d" : $(".container-fluid").css("background-image", "url(https://images.unsplash.com/photo-1438449805896-28a666819a20?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb)");
      break;
      case "11d" : $(".container-fluid").css("background-image", "url(https://images.unsplash.com/photo-1475116127127-e3ce09ee84e1?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb)");
      break;
      case "13d" : $(".container-fluid").css("background-image", "url(https://images.unsplash.com/photo-1483664852095-d6cc6870702d?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb)");
      break;
      case "50d" : $(".container-fluid").css("background-image", "url(https://images.unsplash.com/photo-1490100667990-4fced8021649?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb)");

      case "01n" : $(".container-fluid").css("background-image", "url(https://images.unsplash.com/photo-1454177697940-c43d9f9a7307?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb)");
      break;
      case "02n" : $(".container-fluid").css("background-image", "url(https://images.unsplash.com/photo-1472552944129-b035e9ea3744?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb)");
      break;
      case "03n" : $(".container-fluid").css("background-image", "url(https://images.unsplash.com/photo-1456190156206-dff212c98305?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb)");
      break;
      case "04n" : $(".container-fluid").css("background-image", "url(https://images.unsplash.com/photo-1456190156206-dff212c98305?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb)");
      break;
      case "09n" : $(".container-fluid").css("background-image", "url(https://images.unsplash.com/photo-1470432581262-e7880e8fe79a?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb)");
      break;
      case "10n" : $(".container-fluid").css("background-image", "url(https://images.unsplash.com/photo-1470432581262-e7880e8fe79a?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb)");
      break;
      case "11n" : $(".container-fluid").css("background-image", "url(https://images.unsplash.com/photo-1482005253821-5d6a2c685879?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb)");
      break;
      case "13n" : $(".container-fluid").css("background-image", "url(https://images.unsplash.com/photo-1496340007496-645aaa393411?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb)");
      break;
      case "50n" : $(".container-fluid").css("background-image", "url(https://images.unsplash.com/photo-1508165821229-7be282c31b6e?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb)");

      default:  $(".container-fluid").css("background-image", "url(https://images.unsplash.com/photo-1504386106331-3e4e71712b38?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb)");

    }



  });


  });
  }



});
