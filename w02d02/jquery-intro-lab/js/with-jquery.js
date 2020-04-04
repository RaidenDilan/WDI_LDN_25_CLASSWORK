$(() => {
  const $button = $('#toggle');
  const $circle = $('.circle');
  const $select = $('select');
  const $chosenCity = $('#city');
  const $names = $('.name');
  const $current = $('#current');
  const $form = $('#subscribe');
  const $submit = $('.submit');
  const $heading = $('h1');

  $button.on('click', () => $circle.toggleClass('pulse'));

  $select.on('change', (e) => {
    const $value = $(e.target).val();
    $chosenCity.html($value);
  });

  $names.on('mouseover', (e) => {
    const $currentName = $(e.target).html();
    $current.html($currentName);
  });

  $names.on('mouseout', () => $current.html(''));

  $form.on('submit', (e) => {
    e.preventDefault;
    $submit.html('Submitted');
    $submit.classList.add('submitted');
    console.log('submitted');
  });

  $(window).on('scroll', () => {
    const scroll = $(window).scrollTop();
    scroll > 40 ? $heading.addClass('fadeOutUp') : $heading.removeClass('fadeOutUp');
  });
});
