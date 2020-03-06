// these codes bellow have nothing to do with the DOM bellow it. before $(() => {});
const winConditions = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['paper', 'spock'],
  spock: ['rock', 'scissors']
};

// const choices = ['rock', 'paper', 'scissors'];
const choices = Object.keys(winConditions);

// refactored winner or looser function
function findWinner(player1Choice, player2Choice) {
  if(winConditions[player1Choice].includes(player2Choice)) return 'You win';
  if(winConditions[player2Choice].includes(player1Choice)) return 'You lose';
  return 'Tie';
}
// waits for the page to load before running the code.
// refactored DOM function
function setup() {
  // refactored code bello //we've made vaiables for the code that as being repeated.
  const $player1 = $('.player1');
  const $player2 = $('.player2');
  const $result = $('.result');
  const $buttons = $('button.choice');
  const $reset = $('button.reset');

  // refactored play function
  function makeSelection(e) {
    const player1Choice = $(e.target).text();
    const player2Choice = choices[Math.floor(Math.random() * choices.length)];

    // refactored result function
    $player1.text(player1Choice);
    $player2.text(player2Choice);

    const winner = findWinner(player1Choice, player2Choice);
    $result.text(winner);
  }

  // refactored reset function
  function reset () {
    $player1.text('');
    $player2.text('');
    $result.text('');
  }

  $buttons.on('click', makeSelection);
  $reset.on('click', reset);
}

// DOM function is now called
$(setup);
// you could also use $(document).ready(setup);
