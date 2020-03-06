$(() => {
  $('#getDoughnuts').on('click', getDoughnuts);
  $('form').on('submit', newDoughnut);
  $('ul').on('click', '.delete', deleteDoughnut);
});


// GET
function getDoughnuts() {
  $('#doughnuts').empty();
  $.get('https://ga-doughnuts.herokuapp.com/doughnuts')
    .done((data) => {
      $.each(data, (index, doughnut) => {
        // $('#doughnuts').prepend(` // could use ul or not it doesn't matter.
        addDoughnut(doughnut);
      });
    });
}

// ADD
function addDoughnut(doughnut) {
  $('ul#doughnuts').prepend(`
    <li>${doughnut.flavour} - <em>${doughnut.style}</em> <button class="delete" id="${doughnut.flavour}">Delete</button> </li>
  `);
}

// NEW
function newDoughnut() {
  event.preventDefault();
  const flavour = $('input#doughnut-flavour').val();
  const style = $('select#doughnut-style').val();
  const doughnut = {
    style,
    flavour
  };

  $.post('https://ga-doughnuts.herokuapp.com/doughnuts', doughnut)
    .done((data) => {
      addDoughnut(data);
    });

  $('input#doughnut-flavour').val(null); // clears the form placeholder
}

// DELETE
function deleteDoughnut() {
  console.log($(this));
  console.log('Arrived');
  console.log(event.target);
  const id = $(this).attr('id');
  $.ajax({
    method: 'DELETE',
    url: `https://ga-doughnuts.herokuapp.com/doughnuts/${id}`
  })
  .done(() => {
    $(this).parent().remove();
  });
}
























// function deleteDoughnut(doughnut) {
//   $('li#doughnuts').remove(`
//     <li><em>${doughnut.style}</em></li>
//   `);
// }

// const request = new XMLHttpRequest();
// request.open('GET', 'https://ga-doughnuts.herokuapp.com/doughnuts', true);
//
// request.onload = function() {
//   if(request.status >= 200 && request.status < 400) {
//     const resp = request.responseText;
//     console.log(resp);
//   } else {
//     console.log('Something went wrong with the server side');
//   }
// };

// request.onerror = function() {
//   console.log('Something went wrong with the client side');
// };
//
// request.send();

// $(() => {
//   const ajax = $.get('https://ga-doughnuts.herokuapp.com/doughnuts');
// });

// $.get('https://ga-doughnuts.herokuapp.com/doughnuts')
//   .done((data) => console.log(data));

// Get a single donut and spit out the JSON collection in the console
// Use the more generic $.ajax to do the same request
// Modify that donut by changing it's flavor
// Add a new donut to the list with style and flavor

// // TASK 1
// $.get('https://ga-doughnuts.herokuapp.com/doughnuts/1')
//   .done((data) => console.log(data));
//
// // TAASK 2
// $.ajax({
//   method: 'GET',
//   url: 'https://ga-doughnuts.herokuapp.com/doughnuts/1',
// })
//   .done((data) => {
//     console.log(data);
//   });

// // TASK 3
// $.ajax({
//   method: 'PUT',
//   url: 'https://ga-doughnuts.herokuapp.com/doughnuts/1',
//   data: { style: 'Dough', flavour: 'Cinnamon' }
// })
//   .done((data) => {
//     console.log(data);
//   });

// // TASK 4
// $.ajax({
//   method: 'POST',
//   url: 'https://ga-doughnuts.herokuapp.com/doughnuts',
//   data: { style: 'Yoooo', flavour: 'Pissssss' }
// })
//   .done((data) => {
//     console.log(data);
//   });
