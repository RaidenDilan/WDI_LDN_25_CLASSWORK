window.addEventListener('DOMContentLoaded', () => {
  const feelingDiv = document.getElementById('feeling');
  const buttons = document.getElementsByTagName('button');

  for(let i=0, len=buttons.length;i<len;i++) {
    buttons[i].addEventListener('click', (e) => {
      const newFeeling = e.target.textContent;
      feelingDiv.textContent = newFeeling;

      if(newFeeling === 'Sassy') {
        feelingDiv.style.color = 'pink';
        feelingDiv.style.fontFamily = 'cursive';
        feelingDiv.style.fontSize = '40px';
      }
      if(newFeeling === 'Silly') {
        feelingDiv.style.color = 'orange';
        feelingDiv.style.fontFamily = 'fantasy';
        feelingDiv.style.fontSize = '32px';
      }
      if(newFeeling === 'Sad') {
        feelingDiv.style.color = 'grey';
        feelingDiv.style.fontFamily = 'serif';
        feelingDiv.style.fontSize = '36px';
      }
      if(newFeeling === 'Submarine') {
        feelingDiv.style.color = 'lightBlue';
        feelingDiv.style.fontFamily = 'sans-serif';
        feelingDiv.style.fontSize = '30px';
      }
    });
  }
});
