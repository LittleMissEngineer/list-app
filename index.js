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
  renderListItem(flick) {
    const item = this.template.cloneNode(true)
    item.classList.remove('template')
    item.dataset.id = flick.id
    item
      .querySelector('.flickName')
      .textContent = flick.name

      item.querySelector('.button2.button2')
      .addEventListener('click',this.removeFlick.bind(this,flick ))

    return item
  }

  handleSubmit(ev) {
    const f = ev.target
    const flick = {
      id: ++this.max,
      name: f.flickName.value,
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

