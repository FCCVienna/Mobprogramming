function generateRandomNumber(number) {
  return Math.floor(Math.random() * number);
}

function generateRandomColor() {
  var r = generateRandomNumber(256);
  var g = generateRandomNumber(256);
  var b = generateRandomNumber(256);

  return "rgb(" + r + "," + g + "," + b + ")";
}

var winIndex;

function init() {

var colors = [generateRandomColor(), generateRandomColor(), generateRandomColor()];
winIndex = generateRandomNumber(3);

$('#display-color').html(colors[winIndex]);
$('#color0').css('background', colors[0]);
$('#color1').css('background', colors[1]);
$('#color2').css('background', colors[2]);
}

$('div').on('click', function() {
  if ($(this).attr('id').split('color')[1] == winIndex) {
    alert('success');
  } else {
    alert('you failed!');
  }
  init();
})

init();
