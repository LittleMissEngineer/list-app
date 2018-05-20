const app = {
  init(selectors) {
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
  },

  renderListItem(flick) {
    const item = this.template.cloneNode(true)
    item.classList.remove('template')
    item.dataset.id = flick.id
    item
      .querySelector('.flickName')
      .textContent = flick.name

    return item
  },

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
  },
}

function deleteLi(){
  var list = document.getElementById("flickList")
  list.removeChild(list.childNodes[0])
  }

  let counter = 0
function favLi(){
document.getElementById('flickList').style.backgroundColor = "#A9A9A9"   
counter = counter + 1
if(counter > 1){
 document.getElementById('flickList').style.backgroundColor ="#FFFFFF"
}
}

  


app.init({
  formSelector: '#flickForm',
  listSelector: '#flickList',
  templateSelector: '.flick.template',
})