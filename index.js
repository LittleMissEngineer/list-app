console.log("working")

const form = document.querySelector('form#studentForm')

function updateClass(){
    debugger
var change = document.getElementById("className")
var li = document.createElement('li')
//li.text = "Pie"
var x = document.createTextNode(change)
 li.appendChild(x)

 if (change === '') {
    alert("You must write something!")
  } else {
    document.getElementById("myList").appendChild(li)
  }
  document.getElementById("className") == ""

//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       var div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
}


