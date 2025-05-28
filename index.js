


var buttons = document.querySelectorAll(".drum");
var i = 0;

// while ( i < buttons.length) {
//     buttons[i].addEventListener("click", function () {
//         alert("i got click");
        
//     });
//     i++;
// }



for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    createSound(buttonInnerHTML);
    
   buttonAnimation(buttonInnerHTML)
    // this.style.color = "white";

    // var audio = new Audio('sounds/tom-1.mp3')
    // audio.play();

  });
}

document.addEventListener("keypress", function(event) {

  createSound(event.key);

  buttonAnimation(event.key)
})


function createSound(key) {
  
  switch (key) {

    case "w":
        var crash = new Audio('sounds/crash.mp3')
        crash.play();
      break;

      case "a":
        var kick = new Audio('sounds/kick-bass.mp3')
        kick.play();
      break;

      case "s":
        var snare = new Audio('sounds/snare.mp3')
        snare.play();
      break;

      case "d":
        var tom1 = new Audio('sounds/tom-1.mp3')
        tom1.play();
      break;

      case "j":
        var tom2 = new Audio('sounds/tom-2.mp3')
        tom2.play();
      break;

      case "k":
        var tom3 = new Audio('sounds/tom-3.mp3')
        tom3.play();
      break;

      case "l":
        var tom4 = new Audio('sounds/tom-4.mp3')
        tom4.play();
      break;
  
    default:
      break;
  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout( function () {
    activeButton.classList.remove("pressed");
  }, 100);

}






// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick () {
//     alert("i got click");
// }

































































// this is just a random countdown code, not related to the problem
// function countdown(seconds) {
//     if (seconds > 0) {
//       console.log(seconds);
//       setTimeout(() => {
//         countdown(seconds - 1);
//       }, 1000);
//     } else {
//       console.log("done");
//     }
//   }
  
//   countdown(5);
// end
  