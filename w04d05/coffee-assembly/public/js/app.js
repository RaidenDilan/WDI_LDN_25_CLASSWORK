'use strict';

/* global google:true */

$(function () {
  var $header = $('header');
  var $window = $(window);
  var $link = $('nav a');
  var $menu = $('.menu');

  $window.scroll(updateHeader).trigger('scroll');
  $link.on('click', scrollToSection);
  $menu.on('click', toggleMenu);
  initMap();

  // TOGGLE MENU
  function toggleMenu() {
    $('.dropdown').slideToggle();
  }

  // HEADER
  function updateHeader() {
    var bottomOfHeader = $header.offset().top + $header.height();
    var viewportHeight = $window.height();

    if (bottomOfHeader >= viewportHeight) {
      $header.addClass('opaque');
    } else {
      $header.removeClass('opaque');
    }
  }

  // SCROLLING
  function scrollToSection() {
    var section = $(this).attr('href'); // '#menus'
    $('body').animate({
      scrollTop: $(section).offset().top
    }, 1000, function () {
      if ($window.width() < 575) {
        $('.dropdown').slideToggle();
      }
    });
  }

  // MAP
  function initMap() {
    // LATTITUDE AND LONGITTUDE
    var lat = $('#map').data('lat');
    var lng = $('#map').data('lng');
    var latLng = { lat: lat, lng: lng };

    // CENTERING
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: latLng,
      // Stops zooming in google maps when scrolling
      scrollwheel: false
      // To add google map styles
      // style:
    });
    // GOOGLE MAP MARKER
    new google.maps.Marker({
      position: latLng,
      map: map
    });
  }
});