// $(document).ready(() => {
//
// });

// below is the shortcut for the above line
$(() => {
  // console.log('loaded');

  // const feelingDiv = document.getElementById('feeling');
  // below is the shortcut for the above line
  const $feelingDiv = $('#feeling');

  // const buttons = document.getElementsByTagName('button');
  // below is the shortcut for the above line
  const $buttons = $('button');

  // for(let i=0, len=buttons.length;i<len;i++) {
  //   buttons[i].addEventListener('click', (e) => {
  //     const newFeeling = e.target.textContent;
  //     feelingDiv.textContent = newFeeling;

  // below replaces the above
  $buttons.on('click', (e) => {
    const newFeeling = $(e.target).text();
    $feelingDiv.text(newFeeling);

    if(newFeeling === 'Sassy') {
      // $feelingDiv.style.color = 'pink';
      // $feelingDiv.style.fontFamily = 'cursive';
      // $feelingDiv.style.fontSize = '40px';

      //below replaces the above styling
      $feelingDiv.css({ color: 'pink', fontFamily: 'cursive', fontSize: '40px'});
    }
    if(newFeeling === 'Silly') {
      // $feelingDiv.style.color = 'orange';
      // $feelingDiv.style.fontFamily = 'fantasy';
      // $feelingDiv.style.fontSize = '32px';

      //below replaces the above styling
      $feelingDiv.css({ color: 'orange', fontFamily: 'fantasy', fontSize: '32px'});
    }
    if(newFeeling === 'Sad') {
      // $feelingDiv.style.color = 'grey';
      // $feelingDiv.style.fontFamily = 'serif';
      // $feelingDiv.style.fontSize = '36px';

      //below replaces the above styling
      $feelingDiv.css({ color: 'grey', fontFamily: 'serif', fontSize: '36px'});
    }
    if(newFeeling === 'Submarine') {
      // $feelingDiv.style.color = 'lightBlue';
      // $feelingDiv.style.fontFamily = 'sans-serif';
      // $feelingDiv.style.fontSize = '30px';

      //below replaces the above styling
      $feelingDiv.css({ color: 'lightBlue', fontFamily: 'sans-serif', fontSize: '30px'});
    }
  });
});
