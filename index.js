class App {
  constructor(selectors) {
    this.flicks = []
    this.max = 0
    this.list = document.querySelector(selectors.listSelector)
    this.template = document.querySelector(selectors.templateSelector)

    document
      .querySelector(selectors.formSelector)
      .addEventListener('submit', ev => {
        ev.preventDefault()
        this.handleSubmit(ev)
      })
  }

  removeFlick(flick ,ev){
const item = ev.target.closest('.flick')
item.remove()

const i = this.flicks.indexOf(flick)
this.flicks.splice(i , 1)
// const id = item.dataset.id

  }

  favFlick(flick , ev){
const item = ev.target.closest('.flick')
flick.fav = item.classList.toggle('fav')

  }

  toggleEditable(flick , ev){
    const item = ev.target.closest('.flick')
    const btn = item.querySelector('.edit.button')

const nameField = item.querySelector('.flickName')
if(nameField.isContentEditable){

  //Can't edit
  nameField.contentEditable = false
  btn.textContent = 'Edit'
  btn.classList.remove('success')

  //save changes
  flick.name = nameField.textContent
} else{
  nameField.contentEditable = true
  nameField.focus()
  btn.textContent = 'save'
  btn.classList.add('success')
}
  }

  saveOnEnter(flick , ev){
    if(ev.key === 'Enter'){
      this.toggleEditable(flick , ev)
    }
  }


  renderListItem(flick) {
    const item = this.template.cloneNode(true)
    item.classList.remove('template')
    item.dataset.id = flick.id
   const nameSpan = item
      .querySelector('.flickName')
     nameSpan .textContent = flick.name
     nameSpan.addEventListener('keypress', this.saveOnEnter.bind(this,flick) )

      item.querySelector('.button2.button2')
      .addEventListener('click',this.removeFlick.bind(this,flick ))

item.querySelector('.button1.button1')
.addEventListener('click', this.favFlick.bind(this,flick))

item.querySelector('.edit.button')
.addEventListener('click',this.toggleEditable.bind(this ,flick))


    return item
  }

  handleSubmit(ev) {
    const f = ev.target
    const flick = {
      id: ++this.max,
      name: f.flickName.value,
      fav: false,
    }

    this.flicks.unshift(flick)

    const item = this.renderListItem(flick)
    this.list.insertBefore(item, this.list.firstElementChild)

    f.reset()
  }
}

// function deleteLi(){
//   var list = document.getElementById("flickList")
//   list.removeChild(list.childNodes[0])
//   list.removeChild(list.childNodes[1])

//   }

  let counter = 0
function favLi(color){
var color = '#' + color
document.getElementById('classSchedules').style.background = color

// document.getElementById('highlight').style.backgroundColor = "#00FFFF"
// counter = counter + 1
// if(counter > 1){
//  document.getElementById('flickList').style.backgroundColor ="#FFFFFF"
// }
}

  
const app = new App({
  formSelector: '#flickForm',
  listSelector: '#flickList',
  templateSelector: '.flick.template',
})

