function template (elem, color) {
  return `
    <li class="card col-xs-12 col-lg-3" data-color="${selectColor(color)}">
      <nav class="wrap_card_options">
        <ul>
          <li class="card_options card_delete card_setting">
            fechar
          </li>
          <li class="card_options card_edit card_setting">
            editar
          </li>
          <li class="card_options" data-color="firstColor">
            azul
          </li>
          <li class="card_options" data-color="secondColor">
            carmesim
          </li>
          <li class="card_options" data-color="thirdColor">
            violeta
          </li>
          <li class="card_options" data-color="fourthColor">
            verde
          </li>
        </ul>
      </nav>
      <p class="card_content" contenteditable="false">
        ${elem}
      </p>
    </li>
  `
}

function selectColor (color) {
  if (color === 'firstColor') {
    return color
  }
  else if (color === 'secondColor') {
    return color
  }
  else if (color === 'thirdColor') {
    return color
  }
  else if (color === 'fourthColor') {
    return color
  }
  else {
    return 'firstColor'
  }
}
