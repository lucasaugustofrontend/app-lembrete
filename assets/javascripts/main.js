'use strict';

function selector(elem) {
  return document.querySelector(elem);
}
function compileHandleBars(elem, context, content) {
  var source = selector(elem).innerHTML; // template handlebars
  var template = Handlebars.compile(source);
  var templateCompiled = template(context);
  return content.innerHTML = templateCompiled;
}

var context = {
  name: 'Larissa',
  sname: 'Isabel'
};
var data = { person: [{ name: 'Lucas', sname: 'Augusto' }, { name: 'Larissa', sname: 'Isabel' }, { name: 'Maria', sname: 'Augusta' }, { name: 'Carlos', sname: 'Pereira' }]
};
var content = selector('.content');
var person = selector('.person');
compileHandleBars('#people', context, content);

compileHandleBars('#person', data, person);
//# sourceMappingURL=main.js.map
