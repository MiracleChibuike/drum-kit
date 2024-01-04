
// let actionAll = document.querySelector(".btn").addEventListener("click", function generateData() {
//     // let Num1 = document.getElementById("nameFirst");
//     // let Num2 = document.getElementById("nameSecond");
//     // var fullName = Num1.value + " " + Num2.value;
//     // // fullName = fullName
//     // // console.log(fullName);
//     // // alert(fullName);
//     // let messageBox = document.querySelector(".message");
//     // if (fullName === " "){
//     //     alert("No, cant be empty")
//     //     // Num1.value = "Please fill it out first"
//     //     // Num1.style.color = "red"
//     // }else{
//     //     alert(fullName + " you are good");
//     //     console.log(fullName)
//     //     messageBox.innerText = "hi dear"
//     // }
//     // if(fullName = "Jerry"){
//     //     // messageBox.innerHTML = "No, your last name is needed "
//     //     // alert("hmm")
//     // }else{
//     //     // console.log(Num2.value)
//     // }
//     // let generalName = "Linda";
//     // let Greeting = "Hi there,";
//     // console.log( Greeting + " " + generalName + "!")
// })

// let attempt = document.querySelector(".menusV");
// myPoints = 3;
// // myPoints = document.querySelector(".menusV");
// // attempt.innerText = myPoints;
// console.log(myPoints)
// function add3Points() {
//     myPoints += 3;
//     attempt.innerText = myPoints;
//     console.log(myPoints)
// }

// function remove1Point() {
//     myPoints = myPoints - 1;
//     attempt.innerText = myPoints;
//     console.log(myPoints)
// }

// let alertBox = document.querySelector(".error");
// let alertAction = document.querySelector(".disable").addEventListener("click", function Action() {
//     let mainMessage = "Something went wrong, please try again";
//     alertBox.innerText = mainMessage;
//     alertBox.style.color = "red"
// })



let num1 = 8;
let num2 = 2;
let request1 = document.getElementById("sum-el");
let request2 = document.getElementById("sum-el2");
request1.innerText = num1;
request2.innerText = num2;
// document.getElementById("sum-el").innerText = num1;
// document.getElementById("sum-el2").innerHTML = num2;
let DisplayMessage = document.querySelector(".result");
console.log(DisplayMessage)

let adding = document.querySelector(".add").addEventListener("click", function add() {
    DisplayMessage.innerText = num1 + num2
})

let substracting = document.querySelector(".subtract").addEventListener("click", function substract() {
    DisplayMessage.innerText = num1 - num2
})

let division = document.querySelector(".divide").addEventListener("click", function divide() {
    DisplayMessage.innerText = num1 / num2
})

let multiplyAll = document.querySelector(".multiply").addEventListener("click", function multiply() {
   DisplayMessage.innerText = num1 * num2; 
})

