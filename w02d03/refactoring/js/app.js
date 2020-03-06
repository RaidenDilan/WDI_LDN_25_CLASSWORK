$(() => {
  $('button.choice').on('click', (e) => {

    const choices = ['rock', 'paper', 'scissors'];

    const player1Choice = $(e.target).text();
    const player2Choice = choices[Math.floor(Math.random() * choices.length)];

    $('.player1').text(player1Choice);
    $('.player2').text(player2Choice);

    if(player1Choice === player2Choice) {
      $('.result').text('Tie');
    } else if (
      player1Choice === 'rock' && player2Choice === 'scissors' ||
      player1Choice === 'paper' && player2Choice === 'rock' ||
      player1Choice === 'scissors' && player2Choice === 'paper'
    ) {
      $('.result').text('You win');
    } else {
      $('.result').text('You lose');
    }
  });

  $('button.reset').on('click', () => {
    $('.player1').text('');
    $('.player2').text('');
    $('.result').text('');
  });
});
