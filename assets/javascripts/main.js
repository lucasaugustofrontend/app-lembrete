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

// criação de novos lembretes
var $newCardContent = selector('.newCard_content');
var $newCardAction = selector('.newCard_salve');
var $newCard = selector('.newCard');
var $cardContent = selector('.card_content');

$newCardAction.addEventListener('click', function (e) {
  e.preventDefault();
  if ($newCardContent.value === '') {
    if (selector('.error') === null) {
      var $error = document.createElement('span');
      $error.classList.add('error');
      $error.textContent = 'Por favor preencha o campo acima';
      $newCard.insertBefore($error, $newCardAction.parentNode);
    }
  } else {
    var $card = selector('.card');
    var $copyCard = $card.cloneNode(true);
    $copyCard.querySelector('.card_content').textContent = $newCardContent.value;

    $wrapCard.insertBefore($copyCard, $card);
    $newCardContent.value = '';
    $newCardContent.focus();
  }
});

$newCardContent.addEventListener('input', function () {
  var $error = selector('.error');
  if ($error !== null) $error.remove();
});

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
//# sourceMappingURL=main.js.map