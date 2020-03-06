$(() => {
  $('li').on('click', function() {
    console.log($(this).attr('class'));
  });

// bellow is another way to write the above
  $('li').on('click', (e) => {
    console.log($(e.target).attr('class'));
  });

//fading in and fading out
  $('li').on('click', (e) => {
    const $element = $(e.target);
    $element.hide('slow', 'swing', () => {
      setTimeout(() => {
        $element.show();
      }, 1000);
    });
  });

// removes the li
  $('li').on('click', (e) => {
    $(e.target).remove();
  });

  // $('li').on('click', (e) => {
  $('.grid').append($(e.target));

  // clones the li and adds it to the bottom of the list
    $('li').on('click', (e) => {
      $('.grid').append($(e.target).clone());
    });

  // clones the li adds it to the top of the list but can't click clones
    $('li').on('click', (e) => {
      $('.grid').prepend($(e.target).clone());
    });

    $('li').on('click', (e) => {
      $('.grid').prepend($(e.target).clone());

      $(e.target).parent().append($(e.target).clone());
    });

    $('li').on('click', (e) => {
      const $lis = $(e.target).parent().children();

      for (var i=0, lis; li = $lis[i++]) {
        $(lis).fadeOut(300 * i+1);
      }
    });

  // // removes the next li
    $('li').on('click', (e) => {
      $(e.target).next().fadeOut(300);
    });

  // removes the previous li
    $('li').on('click', (e) => {
      $(e.target).prev().fadeOut(300);
    });

    // turns all the lis into grey background
    $('li').on('click', () => {
      $('body').find('li').css('background', 'grey');
    });

  // slides all the lis upwards
    const $lis = $('li');
    $.each($lis, (index, element) => {
      $(element).slideUp(1000 * index+1);
    });

  // clones the li adds it to the top of the list also you click the clones now'
    $('li').on('click', (e) => {
      $('.grid').prepend($(e.target).clone(true));
    });

  //another cloning. adding to the bottom.
    $('ul').on('click', 'li', (e) => {
      $(e.target).parent().append($(e.target).clone());
    });

  //another cloning. adding to the bottom.
    $('ul').on('click', 'li', (e) => {
      $(e.target).parent().prepend($(e.target).clone());
    });
});
