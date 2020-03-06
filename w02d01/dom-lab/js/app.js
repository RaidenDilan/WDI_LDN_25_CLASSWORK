window.addEventListener('DOMContentLoaded', () => {

  const body = document.createElement('body');
  const heading = document.createElement('h1');
  const box = document.createElement('div');
  const parent = document.getElementsByTagName('body')[0];

  heading.innerHTML = 'I am a heading';

  parent.appendChild(heading);

  heading.style.backgroundColor = 'grey';

  heading.style.border = '2px solid green';

  heading.offSetHeight;

  console.log(heading);

  heading.style.padding = '20px';

  box.innerHTML = 'I am a div';

  body.appendChild('box');

});
