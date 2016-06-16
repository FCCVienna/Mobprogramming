// $("#game .row .columns").html(generateNumber());
// console.log($("#game .row .columns")[0]);
function generateNumber() {
  var number = Math.floor(Math.random()*2 + 1)*2;
  return number;
}

spawnRandomBlock();
function spawnRandomBlock(){
  var number = Math.floor(Math.random()*4);
  console.log($("#game .row .columns")[number]);
  $("#game .row:nth-child .columns:nth-child(" + number + ")").html(generateNumber());
}
