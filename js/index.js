
// defining our event listeners
let main = document.getElementById("drumKit");

// Detecting Button Clicks
const drumKDrun = document.querySelectorAll(".drum").length;
for (let i = 0; i<drumKDrun; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
          // We are going to comment off the alert and use this method instead so that once our button is clicked, it makes a sound

    // First you need get the audio sound that you would love to play with and have it in your codespace
        // Solution 👍👍✔✔
        // Declaring a variabl to hold the audio
        // var Myaudio = new Audio("sounds/crash.mp3");
        // Resetting the audio in other to load as soon as possible
        // Myaudio.load()
        // Playing the audio
        // Myaudio.play();
        // Setting the volume of the audio
        // Myaudio.volume = 0.10;
        // Getting the duration of the audio (returns NaN now because the source is a string)
        // let duration = Myaudio.duration;
        // console.log(Myaudio.currentTime)
        // alert("I got clicked")
        // How to play sounds on a website using JavaScript
        // console.log(this.innerHTML);
        // this.style.color = "black"
        // Can be used to remove lists easily
        // this.remove()


        // Let's try the smaller route using Swith statements
        var playSound = this.innerHTML;
        var dance = this;
        makeNoise(playSound);
        buttonAnimation(playSound)
        console.log(playSound)
      
       
    })
};

function makeNoise(key) {
   switch (key) {
     case "W":
       var tom1 = new Audio("sounds/tom-1.mp3");
       tom1.load();
       tom1.play();
       let f_Word = document.querySelector(".W");
      //  f_Word.style.filter = "brightness(50%)";

       break;

     case "E":
       var tom2 = new Audio("sounds/tom-2.mp3");
       tom2.load();
       tom2.play();
       break;

     case "S":
       var tom3 = new Audio("sounds/tom-3.mp3");
       tom3.load();
       tom3.play();
       break;

     case "T":
       var tom4 = new Audio("sounds/tom-4.mp3");
       tom4.load();
       tom4.play();
       break;

     case "A":
       var crash = new Audio("sounds/crash.mp3");
       crash.load();
       crash.play();
       break;

     case "R":
       var snare = new Audio("sounds/snare.mp3");
       snare.load();
       snare.play();
       break;

     case "N":
       var kick = new Audio("sounds/kick-bass.mp3");
       kick.load();
       kick.play();
       break;

     default:
   }

}

// Using Keypress on the keyboard to caryy-out function
document.addEventListener("keypress", (event)=>{
  makeNoise(event.key);
  buttonAnimation(event.key)
  // alert("key was pressed")
})

// Adding an Animation to the buttons when clicked

function buttonAnimation(CurrentKey) {
  // var WKey = document.querySelector(".W");
  // console.log(WKey);
  var activeButton = document.querySelector("." + CurrentKey);

  activeButton.classList.add("pressed");

// We have to make them to return to their original position after animating using the settime out method

setTimeout(function(){
  activeButton.classList.remove("pressed")
}, 300)

}

// const obj = {
//     name: "James",
//     Address: "Owerri",
//     School: "Solid Foundation",
//     Age: "25 years"
// }
// console.log(obj.Address)

// let f_Word = document.querySelector(".W");
// f_Word.addEventListener("click", respond);

// function respond() {
//     var newAudio = new Audio("sounds/tom-1.mp3");
//     newAudio.load();
//     newAudio.play();
//     f_Word.style.filter = "brightness(40%)"
// }
// // For second Drum
// let s_Word = document.querySelector(".E");
// s_Word.addEventListener("click", respondTwo);

// function respondTwo() {
//     var newAudio = new Audio("sounds/tom-2.mp3");
//     newAudio.load();
//     newAudio.play()
// }
// // For Third Drum
// let t_Word = document.querySelector(".S");
// t_Word.addEventListener("click", respondThree);

// function respondThree() {
//     var newAudio = new Audio("sounds/tom-3.mp3");
//     newAudio.load();
//     newAudio.play()
// }
// // For fourth Drum
// let fourth_Word = document.querySelector(".T");
// fourth_Word.addEventListener("click", respondFour);

// function respondFour() {
//     var newAudio = new Audio("sounds/tom-4.mp3");
//     newAudio.load();
//     newAudio.play()
// }
// // Fifth Drum
// let Fifth_Word = document.querySelector(".EE");
// Fifth_Word.addEventListener("click", respondFive);

// function respondFive() {
//     var newAudio = new Audio("sounds/crash.mp3");
//     newAudio.load();
//     newAudio.play()
// }
// // For 6th Drum
// let sixth_Word = document.querySelector(".R");
// sixth_Word.addEventListener("click", respondSix);

// function respondSix() {
//     var newAudio = new Audio("sounds/snare.mp3");
//     newAudio.load();
//     newAudio.play()
// }
// // Last Drum
// let last_Word = document.querySelector(".N");
// last_Word.addEventListener("click", respondLast);

// function respondLast() {
//     var newAudio = new Audio("sounds/kick.mp3");
//     newAudio.load();
//     newAudio.play()
// }
























// Higher Order Functions ------ Continuation

// case.addEventListener("click", respondto);
// function respondto(){

// }

// function getData(age1, age2) {
//     // console.log(age1 + age2);
//     console.log(age1 * age2);
// }

// function getAge(age1, age2){
//     console.log(age1 + age2)
// }

// function checkAll(age1, age2, operator){
//    return operator(age1, age2)
// }

// checkAll(20, 5, getData)
// getData(5, 7)





 

