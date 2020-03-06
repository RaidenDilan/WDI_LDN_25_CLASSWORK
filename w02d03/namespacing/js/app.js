// if rps is true use rps, otherwise create a new one.
var rps = rps || {};
//rather then const we are gonna use 'rps.'
rps.choices = ['rock', 'paper', 'scissors'];

rps.winConditions = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper'
};

rps.makeSelection = function() {
  return this.choices[Math.floor(Math.random() * this.choices.length)];
};

rps.findWinner = function(player1Choice, player2Choice) {
  if(this.winConditions[player1Choice] === player2Choice) return 'Player 1 wins';
  if(this.winConditions[player2Choice] === player1Choice) return 'Player 2 wins';
  return 'Tie';
};

rps.play = function(e) {
  const player1Choice = $(e.target).text();
  const player2Choice = this.makeSelection();
  const winner = this.findWinner(player1Choice, player2Choice);

  this.$player1.text(player1Choice);
  this.$player2.text(player2Choice);
  this.$result.text(winner);
};

rps.reset = function() {
  this.$player1.text('');
  this.$player2.text('');
  this.$result.text('');
};

rps.setup = function() {
  // console.log(this);
  this.$player1 = $('.player1');
  this.$player2 = $('.player2');
  this.$result = $('.result');
  this.$buttons = $('button.choice');
  this.$reset = $('button.reset');

  this.$buttons.on('click', this.play.bind(this));
  this.$reset.on('click', this.reset.bind(this));
};

$(rps.setup.bind(rps));
