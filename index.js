var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

  });


}

document.addEventListener("keydown", function(event) {

  makeSound(event.key);

});


function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      document.getElementById("w").classList.add('greenGlow');
      setTimeout(function() {
        document.getElementById("w").classList.remove('greenGlow')
      }, 300);
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      document.getElementById("a").classList.add('greenGlow');
      setTimeout(function() {
        document.getElementById("a").classList.remove('greenGlow')
      }, 300);
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      document.getElementById("s").classList.add('greenGlow');
      setTimeout(function() {
        document.getElementById("s").classList.remove('greenGlow')
      }, 300);
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      document.getElementById("d").classList.add('greenGlow');
      setTimeout(function() {
        document.getElementById("d").classList.remove('greenGlow')
      }, 300);
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      document.getElementById("j").classList.add('greenGlow');
      setTimeout(function() {
        document.getElementById("j").classList.remove('greenGlow')
      }, 300);
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      document.getElementById("k").classList.add('greenGlow');
      setTimeout(function() {
        document.getElementById("k").classList.remove('greenGlow')
      }, 300);
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      document.getElementById("l").classList.add('greenGlow');
      setTimeout(function() {
        document.getElementById("l").classList.remove('greenGlow')
      }, 300);
      break;

    default:
      console.log(buttonInnerHTML);

  }
}


// The audio code below courtsey goes to Bryan Jennings
// https://github.com/bryanjenningz
const recordAudio = () =>
  new Promise(async resolve => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true
    });
    const mediaRecorder = new MediaRecorder(stream);
    const audioChunks = [];

    mediaRecorder.addEventListener("dataavailable", event => {
      audioChunks.push(event.data);
    });

    const start = () => mediaRecorder.start();

    const stop = () =>
      new Promise(resolve => {
        mediaRecorder.addEventListener("stop", () => {
          const audioBlob = new Blob(audioChunks);
          const audioUrl = URL.createObjectURL(audioBlob);
          const audio = new Audio(audioUrl);
          const play = () => audio.play();
          resolve({
            audioBlob,
            audioUrl,
            play
          });
        });

        mediaRecorder.stop();
      });

    resolve({
      start,
      stop
    });
  });

const sleep = time => new Promise(resolve => setTimeout(resolve, time));

(async () => {
  const recorder = await recordAudio();
  recorder.start();
  await sleep(5500);
  const audio = await recorder.stop();
  audio.play();
})();
