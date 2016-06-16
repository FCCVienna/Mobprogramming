function task() {
  var text = document.getElementById("text").value;
  console.log(text);
  var list = document.getElementById("list");
  var node = document.createElement("LI");
  //var task = "<li>" + text + "</li>";
  node.innerHTML = text;
  //node.appendChild(text);
  if(text.length === 0) {
    console.error("Wrong input");

  } else {
    list.appendChild(node);
  }


  document.getElementById('form').reset();
};

function deleteOne() {
  var list = document.getElementById("list");
  //if(){

  //}
  console.log(list.lastChild);
  list.lastElementChild.remove();
  console.log(list.lastChild);
};
