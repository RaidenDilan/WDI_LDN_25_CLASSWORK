window.addEventListener('DOMContentLoaded', () => {

  // ####Task 1
  //
  // When the button with the id of "toggle" is **clicked**, you should **toggle** a class of "pulse" on the circle div. If you have added the class correctly, you should see the circle turn red, and it should pulse. When you click the button again, it should go back to being an outline of a circle.

  const clickBtn = document.getElementById('toggle');
  const circle = document.getElementsByClassName('circle')[0];


  clickBtn.addEventListener('click', () => {
    circle.classList.toggle('pulse');
  });

  // ####Task 2
  //
  // Add a **'change'** event listener to the dropdown of cities, so that when a city is selected, the value of that option is inserted into the span with the id of "city".

  const select = document.querySelector('select');
  const chosenCity = document.getElementById('city');

  select.addEventListener('change', (e) => {
    chosenCity.innerHTML = e.target.value;
  });

  // ####Task 3
  //
  // **Part One:** Add event listeners to each of the divs with the class of "name", so that when you hover over that div, the name inside that div appears inside the span with the id of "current".
  //
  // **Part Two:** Add event listeners to each of the divs with the class of "name", so that when the mouse leaves any of the divs, the span with the id of "current" is empty.


  const names = document.getElementsByClassName('name');
  const current = document.getElementById('current');

  for(let i = 0; i < names.length; i++) {
    names[i].addEventListener('mouseover', (e) => {
      const currentName = e.target.innerHTML;
      current.innerHTML = currentName;
    });
  }

  // ####Task 4
  //
  // Add an event listener to the form with the id of "subscribe", so that when you **submit** the form, you add a class of "submitted" to the button inside the form. You should also update the inner HTML of the button to be "Submitted!". If you have added the class correctly, you should see that the button has an opacity of 0.8. You will need to prevent the default behaviour of the form in order to stop the page from refreshing before the changes are made.

  const form = document.getElementById('subscribe');
  const submit = document.querySelector('.submit');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    submit.innerHTML = 'Submited!';
    submit.classList.add('submited');
  });

  // ####Task 5
  //
  // Add an event listener to the window, so that when the user scrolls, you check whether or not the `scrollY` property of the `window` is greater than 40. If it is greater than 40, add the class "fadeOutUp" to the `<h1>` tag. If it is less than 40, remove the class "fadeOutUp" from the `<h1>` tag. As you scroll, you should see the `<h1>` tag fade out. If you scroll back down, it will reappear.

  const heading = document.querySelector('h1');

  window.addEventListener('scroll', () => {
    const scroll = window.scrolly;
    if (scroll > 40) {
      // heading.classList.add('fade')
    }
  });
});
