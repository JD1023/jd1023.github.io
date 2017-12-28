$(document).ready(function() {
  getQuote();
  $("#quote-btn").click(function(){
    getQuote();
   $("body").css('backgroundColor', hue).;

  });
   $('#tweet').on('click', tweetFunc);
   $("body").css('backgroundColor', hue);
});

function getQuote() {
  $.ajax({
    type: "POST",
    crossDomain: true,
    url: "https://api.forismatic.com/api/1.0/",
    data: {
      method: "getQuote",
      format: "jsonp",
      lang: "en"
    },
    dataType: "jsonp",
    jsonp: "jsonp",
    jsonpCallback: "parseQuote"
  });


}

function parseQuote(response) {
  $('#quote').text(response.quoteText);
  $('#author').text(response.quoteAuthor);
  var text = "'" + response.quoteText + "' - " + response.quoteAuthor;

}

function hue() {
  return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
}



function tweet(quote) {
  window.open('https://twitter.com/intent/tweet?hashtags=&text='   + encodeURIComponent(quote));
}
function tweetFunc() {
  tweet($(quote).text());
}
