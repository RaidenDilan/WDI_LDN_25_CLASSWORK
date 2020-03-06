/* eslint no-unused-vars: "off" */
$(() => {

  // WATCH
  const $watch = $('#watch');
  const $watchScreen = $watch.find('.screen');
  // // sets currentDate
  // const currentDate = new Date();
  // console.log(currentDate);
  // // gets seconds, minutes, hours

  currentTime();

  function currentTime() {
    // return the current time in the correct format (HH:MM:SS)
    setInterval(() => {
      var currentDate = new Date();
      var hours = currentDate.getHours();
      var minutes = currentDate.getMinutes();
      var seconds = currentDate.getSeconds();
      $watchScreen.html(hours + ':' + minutes + ':' + seconds);
    }, 1000);
  }
  // currentTime();

  function startClock() {
    // display the current time on the clock screen
    // update the current time every second
  }

  startClock();

  // TIMER
  const $timer = $('#timer');
  const $timerScreen = $timer.find('.screen');
  const $startStopBtn = $timer.find('#startStop');
  const $resetBtn = $timer.find('#reset');

  // add event listeners to $startStopBtn & $resetBtn

  let timeRemaining = 10;
  let timerIsRunning = false;

  // const currentDate = new Date();

  // $('startStopBtn').on('click', () => {

  // });

  function startStopTimer() {

    if (timerIsRunning) {
      clearInterval(timerId);
      timerIsRunning = false;
    } else {
    // start the timer if it is NOT running
      timerId = setInterval(() => {
        timeRemaining--;
        $timerScreen.text(timeRemaining);
        if (timeRemaining === 0) clearInterval(timeId);
      }, 1000);
    }

    startStopTimer();

    // stop the timer if it is running
    // add "ringing" class to timer when time reaches 0
  }

  // function resetTimer() {
    // stop the timer
    // remove the "ringing" class
    // reset the timeRemaining
  // }
});
