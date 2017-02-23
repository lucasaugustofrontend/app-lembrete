function selector (elem, func) {
  if (func !== 'All') return document.querySelector(elem)
  return document.querySelectorAll(elem)
}

const $wrapCard = selector('.wrap_card')
const $cardColors = selector('.card_options', 'All')

$wrapCard.addEventListener('click', (e) => {
  const $this = e.target // selecionar elemento que eu seleciona no documento DOM
  const $card = $this.parentNode.parentNode.parentNode
  const $cardContent = $card.querySelector('.card_content')

  if ($this.dataset.color) {
    $card.dataset.color = $this.dataset.color
    for (var pos = 0; pos < $cardColors.length; pos++) {
      $cardColors[pos].classList.remove('isActive')
    }
    $this.classList.add('isActive')
  }

  if ($this.classList.contains('card_delete')) $card.remove()

  if ($this.classList.contains('card_edit')) {
    if ($cardContent.getAttribute('contenteditable') === 'false') {
      $cardContent.setAttribute('contenteditable', 'true')
      $cardContent.focus()
      $this.classList.add('isActive')
    }
    else {
      $cardContent.setAttribute('contenteditable', 'false')
      $cardContent.blur()
      $this.classList.remove('isActive')
    }
  }
})

// ativar cores para novos cards
const $newCardColors = selector('.newCards_colors .colors', 'All')
for (let i = 0; i < $newCardColors.length; i++) {
  $newCardColors[i].addEventListener('click', (e) => {
    const $this = e.target
    if ($this.dataset.color) {
      for (var pos = 0; pos < $newCardColors.length; pos++) {
        $newCardColors[pos].classList.remove('isActive')
      }
    }
    $this.classList.add('isActive')
  })
}

// criação de novos lembretes
const $newCardContent = selector('.newCard_content')
const $newCardAction = selector('.newCard_salve')
let $newCard = selector('.newCard')

$newCardAction.addEventListener('click', (e) => {
  e.preventDefault()
  if ($newCardContent.value === '') {
    if (selector('.error') === null) {
      const $error = document.createElement('span')
      $error.classList.add('error')
      $error.textContent = 'Por favor preencha o campo lembrete!'
      $newCard.insertBefore($error, $newCardAction.parentNode)
    }
  }
  else {
    let $listCard = selector('.wrap_card')
    const $cardColor = selector('.newCards_colors .colors.isActive')
    const $cardNew = template($newCardContent.value, $cardColor.dataset.color) + $listCard.innerHTML
    $listCard.innerHTML = $cardNew

    // $wrapCard.insertBefore($copyCard, $card)
    $newCardContent.value = ''
  }
})

$newCardContent.addEventListener('input', () => {
  const $error = selector('.error')
  if ($error !== null) $error.remove()
})
const $cardColorClick = selector('.colors', 'All')
for (let i = 0; i < $cardColorClick.length; i++) {
  $cardColorClick[i].addEventListener('click', () => {
    const $error = selector('.error')
    if ($error !== null) $error.remove()
  })
}

// transforma cards em linha e de linhas para blocos
const $displayCard = selector('.display')
$displayCard.addEventListener('click', (e) => {
  e.preventDefault()
  let $card = document.querySelectorAll('.card')
  for (var i = 0; i < $card.length; i++) {
    if ($card[i].classList.contains('col-lg-3')) {
      $card[i].classList.remove('col-lg-3')
      $card[i].classList.add('col-lg-12')
      $displayCard.textContent = 'blocos'
    }
    else {
      $card[i].classList.add('col-lg-3')
      $card[i].classList.remove('col-lg-12')
      $displayCard.textContent = 'linhas'
    }
  }
})

function returnColor(color) {
  for (let i = 0; i < color.length; i++) {
    console.log(color[i])
  }
}

