/* global google:true */

$(() => {
  const $header = $('header');
  const $window = $(window);
  const $link = $('nav a');
  const $menu = $('.menu');

  $window.scroll(updateHeader).trigger('scroll');
  $link.on('click', scrollToSection);
  $menu.on('click', toggleMenu);
  initMap();

  function toggleMenu() {
    $('.dropdown').slideToggle();
  }

  function updateHeader() {
    const bottomOfHeader = $header.offset().top + $header.height();
    const viewportHeight = $window.height();

    if (bottomOfHeader >= viewportHeight) {
      $header.addClass('opaque');
    } else {
      $header.removeClass('opaque');
    }
  }

  function scrollToSection() {
    const section = $(this).attr('href'); // '#menus'
    $('body').animate( {
      scrollTop: $(section).offset().top
    }, 1000, () => {
      if($window.width() < 575) {
        $('.dropdown').slideToggle();
      }
    });
  }

  function initMap() {
    const lat = $('#map').data('lat');
    const lng = $('#map').data('lng');
    const latLng = { lat, lng };

    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: latLng,
      scrollwheel: false
    });
    
    new google.maps.Marker({
      position: latLng,
      map: map
    });
  }
});
