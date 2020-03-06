$(() => {

  // // with classic anonymous function - this refers to the element that received the event
  $('.parent').on('click', '> div', function() {
    $(this).parent().append($(this).clone());
  });

  // with arrow function - e.target refers to the element that was actually clicked on
  $('.parent').on('click', '> div', (e) => {
    if($(e.target).hasClass('grandchild')) return false;
    $(e.target).parent().append($(e.target).clone());
  });

});