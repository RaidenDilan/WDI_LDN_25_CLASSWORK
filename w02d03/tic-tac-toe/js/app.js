$(() => {
  const $li = $('li');
  let playerOne = true;
  // const $button = $('button');

  function changePlayer() {
    if(playerOne===false) {
      playerOne = true;
    } else {
      playerOne = false;
    }
  }


  function createItem() {
    if(playerOne===true) {
      $(this).append('<div class="cross"></div>');
    } else {
      $(this).append('<div class="circle"></div>');
      playerOne===true;
    }
  }

  // function chooseSide() {
  //   if(playerOne===true) {
  //     $(this).append('<button class="cross1"></button>');
  //   } else {
  //     $(this).append('<button class="circle1"></button>');
  //     playerOne===true;
  //   }
  // }


  $li.on('click', changePlayer);
  $li.on('click', createItem);
  // $button.on('click', chooseSide);
});
