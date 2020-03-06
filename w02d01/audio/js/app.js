window.addEventListener('DOMContentLoaded', () => {

  const audio = document.querySelector('audio');
  audio.src = 'http://soundbible.com/mp3/Audience_Applause-Matthiew11-1206899159.mp3';
  const btn = document.querySelector('button');

  audio.addEventListener('ended', () => btn.textContent = 'PLAY');

  btn.addEventListener('click', (e) => {
    if(audio.paused) {
      audio.play();
      e.target.innerHTML = 'PAUSE';
    } else {
      audio.pause();
      e.target.innerHTML = 'PLAY';
    }
  });
});
