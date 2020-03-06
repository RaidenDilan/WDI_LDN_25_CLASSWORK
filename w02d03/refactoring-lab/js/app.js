let firstNumber  = '';
let secondNumber = '';
const $operator = $('operator');
const $number = $('number');
const $clear = $('clear.clear');
const $display = $('display');
const $button = $('button.number');

$(() => {

  $button.on('click', buttonClicked);

  function buttonClicked(e) {
    const btn = $(e.target).val();
    $display.val(btn);

    if(typeof firstNumber !== 'number') { // Check if firstNumber has already been assigned
      firstNumber = parseFloat(btn); // If it hasn't, assign the value to firstNumber
    } else {
      secondNumber = parseFloat(btn); // Else assign the value to secondNumber
    }
  }

  $operator.on('click', operatorClicked);

  function operatorClicked() {
    $operator.val(btn);
  }

// function calculate()
  $('.eq').on('click', () => {
    switch (operator) {
      case '+':
        $display.val(firstNumber + secondNumber);
        break;
      case '-':
        $display.val(firstNumber - secondNumber);
        break;
      case '/':
        $display.val(firstNumber / secondNumber);
        break;
      case 'x':
        $('.display').val(firstNumber * secondNumber);
        break;
    }
  });

  $clear.on('click', () => {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    $display.val('');
  });
});
// $(setup);
