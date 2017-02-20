function selector (elem) {
  return document.querySelector(elem)
}
function compileHandleBars(elem, context, content) {
  const source = selector(elem).innerHTML // template handlebars
  const template = Handlebars.compile(source)
  const templateCompiled = template(context)
  return content.innerHTML = templateCompiled  
}

const context = {
  name: 'Larissa',
  sname: 'Isabel'
}
const data = { person: [
  {name: 'Lucas', sname: 'Augusto'},
  {name: 'Larissa', sname: 'Isabel'},
  {name: 'Maria', sname: 'Augusta'},
  {name: 'Carlos', sname: 'Pereira'}
]
}
const content = selector('.content')
const person = selector('.person')
compileHandleBars('#people', context, content)

compileHandleBars('#person', data, person)
