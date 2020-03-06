$(() => {

  let firstNumber  = '';
  let secondNumber = '';
  let operator = '';

  $('.number').on('click', (e) => {
    const btn = $(e.target).val();
    $('.display').val(btn);

    if(typeof firstNumber !== 'number') { // Check if firstNumber has already been assigned
      firstNumber = parseFloat(btn); // If it hasn't, assign the value to firstNumber
    } else {
      secondNumber = parseFloat(btn); // Else assign the value to secondNumber
    }
  });

  $('.operator').on('click', (e) => {
    operator = $(e.target).val();
  });

  $('.eq').on('click', () => {
    switch (operator) {
      case '+':
        $('.display').val(firstNumber + secondNumber);
        break;
      case '-':
        $('.display').val(firstNumber - secondNumber);
        break;
      case '/':
        $('.display').val(firstNumber / secondNumber);
        break;
      case 'x':
        $('.display').val(firstNumber * secondNumber);
        break;
    }
  });

  $('.clear').on('click', () => {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    $('.display').val('');
  });
});
