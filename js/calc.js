
// function getMilk(money) {
//     let activate = document.getElementById("menuSub");
//     var cost = money * 1.5;
//     var bottle_1 = 1.5
//     var bootlecCost = Math.floor(money / 1.5);
//     // alert( bootlecCost / 10 )
//     alert(`buy ${bootlecCost} bottles of sugar`);
//     return alert( money % 1.5 );
    
    // if (bottle_1 === 1.5) {
    //     alert( 'buy' + " " + 5 / bottle_1 + " " + 'bottles of milk')
    // }else{
    //     alert('error')
    // }
// }
// function CallMe(name, age) {
//     age = 27;
//     name = 'Miracle'
//     // alert( "My name is" + name + " " + 'and I am' + " " + age + "old")
//     let u = Math.random();
//     u = u * 7;
//     u = Math.floor(u) +1;
//     console.log(u)
    
// }
// let targetAction = document.getElementById("callCase").addEventListener('click', function caseME() {
//     // create a prompt that asks the user to input 2 names one for lover and the other for crush
//     let percent = "%"
//     let name1 = prompt('Name of Person 1');
//     let name2 = prompt("Name of person 2")
//     let randomNum = Math.random();
//     randomNum = randomNum * 100;
//     randomNum = Math.floor(randomNum) + 1;
//     if (randomNum <=50) {
//         alert(`${name1} and ${name2} I suggest you both should know each other better before getting married`)
//     }else{
//         alert(`Congratulations ${name1} and ${name2} you both are match`)
//     }
//     alert(`${name1} and ${name2} your love score is ${randomNum}${percent}`)
//     console.log(randomNum)
// })
// let menus = document.querySelector(".excel").addEventListener('click', function() {

// })


//Code for our calculator

let inputArea = document.getElementById("inputValue");
let inputDisplay = inputArea.value;
function call (a) {
    inputArea.value += (a);
}

//Code to clear all the input values in the inputArea
function Clear() {
    let getValue = inputArea;
    if (getValue.value != " ") {
        getValue.value = " "
    }
}
let CalculateAll = document.getElementById('calu').addEventListener('click', function () {
    let menus = inputArea.value;
    let calu = eval(menus);
    inputArea.value = calu
    // alert(menus)
})

// var change = getMilk(4);
// console.log(change)n