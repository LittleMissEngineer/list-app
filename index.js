console.log("working")

const app = {
init(selectors){
  this.course = []
  this.max = 0
  this.list = document.querySelector(selectors.listSelector)
document
  .querySelector(selectors.classUpdate)
  .addEventListener('submit' , (ev) => {
    ev.preventDefault()
    this.handleSubmit(ev)
  })

},

renderListItem(course){
const item = document.createElement('li')
item.textContent = course.name
return item
},

handleSubmit(ev){


const f = ev.target
const course = {
  id: ++this.max,
  name: f.className.value,
}
// this.max ++


this.course.push(course)

const item = this.renderListItem(course)
item.dataset.id = course.id
this.list.appendChild(item)
f.reset()
},

}


app.init({
  classUpdate:'#studentClass', 
  listSelector: '#myList' 
  // check later if error
})



// function updateClass(){
//     debugger
// var change = document.getElementById("className")
// var li = document.createElement('li')
// //li.text = "Pie"
// var x = document.createTextNode(change)
//  li.appendChild(x)

//  if (change === '') {
//     alert("You must write something!")
//   } else {
//     document.getElementById("myList").appendChild(li)
//   }
//  document.getElementById("className") == ""

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



