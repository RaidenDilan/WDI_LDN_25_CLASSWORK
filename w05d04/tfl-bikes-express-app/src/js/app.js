$(() => {

/* global google:true */

  $(function() {
    var $header = $('header');
    var $window = $(window);
    var $links = $('nav a');
    var $menu = $('.menu');

    $window.scroll(updateHeader).trigger('scroll');
    $links.on('click', scrollToSection);
    $menu.on('click', toggleMenu);
    initMap();

    function toggleMenu() {
      $('.dropdown').slideToggle();
    }

    function updateHeader() {
      var bottomOfHeader = $header.offset().top + $header.height();
      var h2Height = $window.height();

      if (bottomOfHeader >= h2Height) $header.addClass('opaque');
      else $header.removeClass('opaque');
    }

    function scrollToSection() {
      var section = $(this).attr('href');
      $('body').animate({
        scrollTop: $(section).offset().top
      }, 1000, function () {
        if ($window.width() < 575) $('.dropdown').slideToggle();
      });
    }
  });

  function initMap() {
    var uluru = {
      lat: 51.515209,
      lng: -0.072132
    };
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: uluru
    });

    new google.maps.Marker({
      position: uluru,
      map: map
    });

    function getBikes() {
      $
        .get(`https://api.tfl.gov.uk/bikepoint`)
        .done((response) => {
        for (let i=0; i<response.length; i++) {
          var marker = new google.maps.Marker({
            position: { lat: response[i].lat, lng: response[i].lon},
            map: map
          });
          // console.log(response[0].commonName);
          // console.log(response[0].additionalProperties[6].value);
          // console.log(response[0].additionalProperties[7].value);

          var contentString =
            `<div id="content">`+
              `<div id="siteNotice">`+
            `</div>`+
            `<h1 id="firstHeading" class="firstHeading">${response[i].commonName}</h1>`+
            `<div id="bodyContent">`+
            `<p><b>Available Bikes: </b> ${response[i].additionalProperties[6].value} </p>`+
            `<p><b>Empty Docks: </b> ${response[i].additionalProperties[7].value} </p>`+
            `</div>`+
            `</div>`;

          var infowindow = new google.maps.InfoWindow({ content: contentString });

          // need to loop through the bikepoint and assign contentString to each one.
          marker.addListener('click', () => infowindow.open(map, marker));
      }
      });
    }
    
    getBikes();
  }
});
