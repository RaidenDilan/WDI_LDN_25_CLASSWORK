$(() => {

  // const button = document.getElementById('toggle');
  // below is the shortcut for the above line
  const $button = $('#toggle');

  // const circle = document.getElementsByClassName('circle')[0];
  // below is the shortcut for the above line
  const $circle = $('.circle');

  // button.addEventListener('click', (e) => {
    // circle.classList.toggle('pulse');

  $button.on('click', () => {
    $circle.toggleClass('pulse');
  });

  // const select = document.querySelector('select');
  // below is the shortcut for the above line
  const $select = $('select');

  // const chosenCity = document.getElementById('city');
  // below is the shortcut for the above line
  const $chosenCity = $('#city');

  // select.addEventListener('change', (event) => {
  //   const value = event.target.value;
  //   chosenCity.innerHTML = value;

  $select.on('change', (e) => {
    const $value = $(e.target).val();
    $chosenCity.html($value);
  });

  // const names = document.getElementsByClassName('name');
  // below is the shortcut for the above line
  const $names = $('.name');

  // const current = document.getElementById('current');
  // below is the shortcut for the above line
  const $current = $('#current');

  // for(let i = 0; i < names.length; i++) {
  //   names[i].addEventListener('mouseover', (event) => {
  //     const currentName = event.target.innerHTML;
  //     current.innerHTML = currentName;

  // below is the shortcut for the above line
  $names.on('mouseover', (e) => {
    const $currentName = $(e.target).html();
    $current.html($currentName);
  });

  // names[i].addEventListener('mouseout', () => {
  //   current.innerHTML = '';

  $names.on('mouseout', () => {
    $current.html('');
  });

  // const form = document.getElementById('subscribe');
  // below is the shortcut for the above line
  const $form = $('#subscribe');

  // const submit = document.querySelector('.submit');
  // below is the shortcut for the above line
  const $submit = $('.submit');

  // form.addEventListener('submit', (event) => {
  //   event.preventDefault();
  //   submit.innerHTML = 'Submitted!';
  //   submit.classList.add('submitted');

  $form.on('submit', (e) => {
    e.preventDefault;
    $submit.html('Submitted');
    $submit.classList.add('submitted');
    console.log('submitted');
  });

  // const heading = document.querySelector('h1');

  const $heading = $('h1');

  // window.addEventListener('scroll', () => {
  //   const scroll = window.scrollY;
  //   if (scroll > 40) {
  //     heading.classList.add('fadeOutUp');
  //   } else {
  //     heading.classList.remove('fadeOutUp');
  //   }

  $(window).on('scroll', () => {
    const scroll = $(window).scrollTop();
    scroll > 40 ? $heading.addClass('fadeOutUp') : $heading.removeClass('fadeOutUp');
  });
});
