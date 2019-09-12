const gamePlace = document.querySelector('#game');
const body = document.querySelector('body');
const result = document.createElement('h1');
const playAgainBtn = document.createElement('button');
const player = document.createElement('h3');

player.textContent = 'X-player\'s step';
body.appendChild(player);

let inititalStep = 0;

gamePlace.addEventListener('click', step);

function step(event) {
  let target = event.target;
  if (target.textContent) {
    return warning(target);
  }
  handleStep(target);
}

function handleStep(target) {
  if (target.tagName.toLowerCase() === 'button' && !target.textContent) {
    if (inititalStep % 2 === 0) {
      target.textContent = 'x';
      player.textContent = 'O-player\'s step';
    } else {
      target.textContent = 'o';
      player.textContent = 'X-player\'s step';
    }
    inititalStep++;
  }
  checkWinner();
}

function warning(target) {
  target.classList.add('warning');
  setTimeout(() => {
    target.classList.remove('warning');
  }, 1000)
}

function checkWinner() {
  let buttons = [...gamePlace.children];
  buttons.forEach((item, index, array) => {
    if ((array[0].textContent == 'x' &&
        array[1].textContent == 'x' &&
        array[2].textContent == 'x') || (array[3].textContent == 'x' &&
        array[4].textContent == 'x' &&
        array[5].textContent == 'x') || (array[6].textContent == 'x' &&
        array[7].textContent == 'x' &&
        array[8].textContent == 'x') || (array[0].textContent == 'x' &&
        array[3].textContent == 'x' &&
        array[6].textContent == 'x') || (array[1].textContent == 'x' &&
        array[4].textContent == 'x' &&
        array[7].textContent == 'x') || (array[2].textContent == 'x' &&
        array[5].textContent == 'x' &&
        array[8].textContent == 'x') || (array[0].textContent == 'x' &&
        array[4].textContent == 'x' &&
        array[8].textContent == 'x') || (array[2].textContent == 'x' &&
        array[4].textContent == 'x' &&
        array[6].textContent == 'x')) {
      result.textContent = 'X - winner';
      body.appendChild(result);
      playAgainFunc();
    } else if ((array[0].textContent == 'o' &&
        array[1].textContent == 'o' &&
        array[2].textContent == 'o') || (array[3].textContent == 'o' &&
        array[4].textContent == 'o' &&
        array[5].textContent == 'o') || (array[6].textContent == 'o' &&
        array[7].textContent == 'o' &&
        array[8].textContent == 'o') || (array[0].textContent == 'o' &&
        array[3].textContent == 'o' &&
        array[6].textContent == 'o') || (array[1].textContent == 'o' &&
        array[4].textContent == 'o' &&
        array[7].textContent == 'o') || (array[2].textContent == 'o' &&
        array[5].textContent == 'o' &&
        array[8].textContent == 'o') || (array[0].textContent == 'o' &&
        array[4].textContent == 'o' &&
        array[8].textContent == 'o') || (array[2].textContent == 'o' &&
        array[4].textContent == 'o' &&
        array[6].textContent == 'o')) {
      result.textContent = 'O - winner';
      body.appendChild(result);
      player.textContent = '';
      playAgainFunc();
    }
  })
}

function playAgainFunc() {
  setTimeout(() => {
    playAgainBtn.textContent = 'Play again?';
    body.appendChild(playAgainBtn);
  }, 3000);
}

playAgainBtn.addEventListener('click', newGame);

function newGame() {
  let playFields = [...gamePlace.children];
  playFields.forEach((item) => {
    item.textContent = '';
    playAgainBtn.style.display = 'none';
    result.textContent = '';
  })
}

for (let i = 0; i < 9; i++) {
  document.getElementById('game').innerHTML += "<button class='block'></button>";
}