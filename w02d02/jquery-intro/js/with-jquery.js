$(() => {
  const $feelingDiv = $('#feeling');
  const $buttons = $('button');

  $buttons.on('click', (e) => {
    const newFeeling = $(e.target).text();
    $feelingDiv.text(newFeeling);

    if(newFeeling === 'Sassy') $feelingDiv.css({ color: 'pink', fontFamily: 'cursive', fontSize: '40px' });
    if(newFeeling === 'Silly') $feelingDiv.css({ color: 'orange', fontFamily: 'fantasy', fontSize: '32px' });
    if(newFeeling === 'Sad') $feelingDiv.css({ color: 'grey', fontFamily: 'serif', fontSize: '36px' });
    if(newFeeling === 'Submarine') $feelingDiv.css({ color: 'lightBlue', fontFamily: 'sans-serif', fontSize: '30px' });
  });
});
