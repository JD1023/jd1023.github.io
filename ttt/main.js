$(document).ready(function() {
  newGame();
var player;
 var winCombo = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,4,8],
  [2,4,6],
  [0,3,6],
  [1,4,7],
  [2,5,8]
];


function checkWin(){

for (var i = 0;i <= winCombo.length;i++){
  for (var j = 0; j < winCombo[i].length;j++){
    console.log(winCombo[i][j])

  }
}


}


  $("td").click(function(event) {
    console.log(this.id);
  $(this).text(player)
  checkWin();
  });




function newGame(){
$("td").text('');
$(".modal").show();
$("#X").click(function(){
  player = "X";
  $(".modal").hide();
});
$("#O").click(function(){
  player = "O";
  $(".modal").hide();
});
}

$("#newGame").click(newGame);










});
