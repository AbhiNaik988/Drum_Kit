let numberOfDrumButtons = document.querySelectorAll(".set button").length;
for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".set button")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    eventHandler(buttonInnerHTML);
    animateSelectedDrum(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function (event) {
  let key = event.key;
  eventHandler(key);
  animateSelectedDrum(key);
});

function eventHandler(key) {
  switch (key) {
    case "w":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case "a":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case "s":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case "d":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    case "j":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case "k":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case "l":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
  }
}

function animateSelectedDrum(key) {
  let activeDrum = document.querySelector("." + key);
  activeDrum.classList.add("pressed");

  setTimeout(function () {
    activeDrum.classList.remove("pressed");
  }, 100);
}
