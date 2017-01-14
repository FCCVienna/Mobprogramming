$(document).ready(function() {
  function randomDiceNumber () {
    return Math.ceil(Math.random()*3);
  }

  $('#roll').click(function () {
    var result = randomDiceNumber();
    $('#result').html(result);
    // for(i = 0; i < resultArray.length; i ++) {
    //   if (result === resultArray[i]) {
        $("#"+result).css("color", "red");
    //   };
    // };
    console.log(result);
  })
})

