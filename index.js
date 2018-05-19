const app = {
  init(selectors) {
    this.courses = []
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

  renderListItem(course) {
      const item = document.createElement('li')

    item.textContent = course.name
      item.dataset.id = course.id
      // item
      //   .querySelector('.courseName')
      //   .textContent = course.name
  
      return item
    },

    

  handleSubmit(ev) {
    const f = ev.target
    const course = {
      id: ++this.max,
      name: f.courseName.value,
    }

    this.courses.unshift(course)

    const item = this.renderListItem(course)
    this.list.insertBefore(item, this.list.firstElementChild)

    f.reset()
  },
}

function deleteLi(){
var list = document.getElementById("myList")
list.removeChild(list.childNodes[0])
}




app.init({
  formSelector: '#studentClass',
  listSelector: '#myList',
  templateSelector: '.course.template',
})