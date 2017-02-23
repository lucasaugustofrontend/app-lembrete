'use strict';

function template(elem, color) {
  return '\n    <li class="card col-xs-12 col-lg-3" data-color="' + selectColor(color) + '">\n      <nav class="wrap_card_options">\n        <ul>\n          <li class="card_options card_delete card_setting">\n            fechar\n          </li>\n          <li class="card_options card_edit card_setting">\n            editar\n          </li>\n          <li class="card_options" data-color="firstColor">\n            azul\n          </li>\n          <li class="card_options" data-color="secondColor">\n            carmesim\n          </li>\n          <li class="card_options" data-color="thirdColor">\n            violeta\n          </li>\n          <li class="card_options" data-color="fourthColor">\n            verde\n          </li>\n        </ul>\n      </nav>\n      <p class="card_content" contenteditable="false">\n        ' + elem + '\n      </p>\n    </li>\n  ';
}

function selectColor(color) {
  if (color === 'firstColor') {
    return color;
  } else if (color === 'secondColor') {
    return color;
  } else if (color === 'thirdColor') {
    return color;
  } else if (color === 'fourthColor') {
    return color;
  } else {
    return 'firstColor';
  }
}
//# sourceMappingURL=template.js.map
