'use strict';

function selector(elem, func) {
  if (func !== 'All') return document.querySelector(elem);
  return document.querySelectorAll(elem);
}

var $wrapCard = selector('.wrap_card');
var $cardColors = selector('.card_options', 'All');

$wrapCard.addEventListener('click', function (e) {
  var $this = e.target; // selecionar elemento que eu seleciona no documento DOM
  var $card = $this.parentNode.parentNode.parentNode;
  var $cardContent = $card.querySelector('.card_content');

  if ($this.dataset.color) {
    $card.dataset.color = $this.dataset.color;
    for (var pos = 0; pos < $cardColors.length; pos++) {
      $cardColors[pos].classList.remove('isActive');
    }
    $this.classList.add('isActive');
  }

  if ($this.classList.contains('card_delete')) $card.remove();

  if ($this.classList.contains('card_edit')) {
    if ($cardContent.getAttribute('contenteditable') === 'false') {
      $cardContent.setAttribute('contenteditable', 'true');
      $cardContent.focus();
      $this.classList.add('isActive');
    } else {
      $cardContent.setAttribute('contenteditable', 'false');
      $cardContent.blur();
      $this.classList.remove('isActive');
    }
  }
});

// ativar cores para novos cards
var $newCardColors = selector('.newCards_colors .colors', 'All');
for (var i = 0; i < $newCardColors.length; i++) {
  $newCardColors[i].addEventListener('click', function (e) {
    var $this = e.target;
    if ($this.dataset.color) {
      for (var pos = 0; pos < $newCardColors.length; pos++) {
        $newCardColors[pos].classList.remove('isActive');
      }
    }
    $this.classList.add('isActive');
  });
}

// criação de novos lembretes
var $newCardContent = selector('.newCard_content');
var $newCardAction = selector('.newCard_salve');
var $newCard = selector('.newCard');

$newCardAction.addEventListener('click', function (e) {
  e.preventDefault();
  if ($newCardContent.value === '') {
    if (selector('.error') === null) {
      var $error = document.createElement('span');
      $error.classList.add('error');
      $error.textContent = 'Por favor preencha o campo lembrete!';
      $newCard.insertBefore($error, $newCardAction.parentNode);
    }
  } else {
    var $listCard = selector('.wrap_card');
    var $cardColor = selector('.newCards_colors .colors.isActive');
    var $cardNew = template($newCardContent.value, $cardColor.dataset.color) + $listCard.innerHTML;
    $listCard.innerHTML = $cardNew;

    // $wrapCard.insertBefore($copyCard, $card)
    $newCardContent.value = '';
  }
});

$newCardContent.addEventListener('input', function () {
  var $error = selector('.error');
  if ($error !== null) $error.remove();
});
var $cardColorClick = selector('.colors', 'All');
for (var _i = 0; _i < $cardColorClick.length; _i++) {
  $cardColorClick[_i].addEventListener('click', function () {
    var $error = selector('.error');
    if ($error !== null) $error.remove();
  });
}

// transforma cards em linha e de linhas para blocos
var $displayCard = selector('.display');
$displayCard.addEventListener('click', function (e) {
  e.preventDefault();
  var $card = document.querySelectorAll('.card');
  for (var i = 0; i < $card.length; i++) {
    if ($card[i].classList.contains('col-lg-3')) {
      $card[i].classList.remove('col-lg-3');
      $card[i].classList.add('col-lg-12');
      $displayCard.textContent = 'blocos';
    } else {
      $card[i].classList.add('col-lg-3');
      $card[i].classList.remove('col-lg-12');
      $displayCard.textContent = 'linhas';
    }
  }
});

function returnColor(color) {
  for (var _i2 = 0; _i2 < color.length; _i2++) {
    console.log(color[_i2]);
  }
}
//# sourceMappingURL=main.js.map
