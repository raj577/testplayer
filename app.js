const app = () => {
  const song = document.querySelector(".song");
  const play = document.querySelector(".play");
  const outline = document.querySelector(".moving-outline circle");
  const video = document.querySelector(".vid-container video");
  //   video.play();
  //   song.play();

  //Sounds
  const sounds = document.querySelectorAll(".sound-picker button");
  //Time Display
  const timeDisplay = document.querySelector(".time-display");
  //Get the length of the path
  const outlineLength = outline.getTotalLength();
  //Duration
  let fakeDuration = 600;

  outline.style.strokeDasharray = outlineLength;
  outline.style.strokeDashoffset = outlineLength;

  //plays sound
  play.addEventListener("click", () => {
    checkPlaying(song);
  });

  //Select
  const checkPlaying = song => {
    if (song.paused) {
      song.play();
      video.play();
      play.src = "./svg/pause.svg";
    } else {
      song.pause();
      video.pause();
      play.src = "./svg/play.svg";
    }
  };

  //animating the circle
  song.ontimeupdate = () => {
    let currentTime = song.currentTime;
    let elapsedTime = song.getTotalLength - currentTime;
    let seconds = currentTime * 4;
    let minutes = elapsedTime;
    // let seconds = 9;
    // let minutes = 6;
    //Animate the circle
    // let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
    // outline.style.strokeDashoffset = progress;

    //Animate the text
    // timeDisplay.textContent = '${minutes}:${seconds}';
    timeDisplay.textContent = `${currentTime}:${seconds}`;
  };
};

app();
